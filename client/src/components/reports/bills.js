import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { ActionsMenu } from "../actions-menu";

const stats = [
  {
    content: "$191.02",
    label: "Draft",
  },
  {
    content: "$320.50",
    label: "Awaiting delivery",
  },
  {
    content: "$3,800.00",
    label: "Due",
  },
  {
    content: "$3,500.00",
    label: "Overdue",
  },
];

export const Bills = (props) => {
  const theme = useTheme();
  const [range, setRange] = useState("Last 7 days");
  const [data, setData] = useState({
    series: [
      {
        data: [12, 24, 36, 48, 60, 72, 84],
        name: "Due",
      },
      {
        data: [18, 36, 48, 60, 72, 84, 96],
        name: "Overdue",
      },
    ],
    categories: [
      "Capital One",
      "Ally Bank",
      "ING",
      "Ridgewood",
      "BT Transilvania",
      "CEC",
      "CBC",
    ],
  });
  const ranges = [
    {
      label: "Last 7 days",
      onClick: () => {
        setRange("Last 7 days");
      },
    },
    {
      label: "Last Month",
      onClick: () => {
        setRange("Last Month");
      },
    },
    {
      label: "Last Year",
      onClick: () => {
        setRange("Last Year");
      },
    },
  ];

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(6, 70, 153, 1)", "rgba(93, 20, 20, 1)"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      markers: {
        radius: 50,
      },
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    stroke: {
      show: false,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      theme: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: data.categories,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -12,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };

  useEffect(() => {
    async function getAccountData() {
      let res, txs;
      try {
        res = await fetch(
          "http://134.122.118.59:4000/transactions/0x5C374722f9a19D36ec6F679DB27c38D2F8B8aC2b"
        );
        txs = await res.json();
      } catch (e) {
        console.log(e);
      }
      txs = txs.map((tx) => {
        return {
          block: tx.blockNumber,
          price: tx.price / 1e18,
          value: tx.value / 1e18,
          txIn:
            tx.to.toLowerCase() ===
            "0x5C374722f9a19D36ec6F679DB27c38D2F8B8aC2b".toLowerCase(),
        };
      });
      console.log(txs);
      setData({
        series: [
          {
            data: txs.map((tx) => {
              if (tx.txIn === true) return Math.round(tx.value * tx.price);
            }),
            name: "Incoming Transactions",
          },
          {
            data: txs.map((tx) => {
              if (tx.txIn === false) return Math.round(tx.value * tx.price);
            }),
            name: "Outgoing Transactions",
          },
        ],
        categories: txs.map((tx) => {
          return tx.block;
        }),
      });
    }
    getAccountData();
  }, []);

  return (
    <Card variant="outlined" {...props}>
      <CardHeader
        action={
          <ActionsMenu
            actions={ranges}
            label={range}
            size="small"
            variant="text"
          />
        }
        title="Transaction History"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          {stats.map((item) => (
            <Grid item key={item.label} md={3} sm={6} xs={12}>
              <Box
                sx={{
                  alignItems: "center",
                  backgroundColor: "neutral.100",
                  borderRadius: 1,
                  p: 2,
                }}
              >
                <Typography color="textSecondary" variant="overline">
                  {item.label}
                </Typography>
                <Typography color="textPrimary" variant="h6">
                  {item.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Chart
          height={400}
          options={chartOptions}
          series={data.series}
          type="bar"
        />
      </CardContent>
    </Card>
  );
};
