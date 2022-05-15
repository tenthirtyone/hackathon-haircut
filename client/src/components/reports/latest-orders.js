import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, CardHeader, Divider } from "@material-ui/core";
import { OrderPreviewItem } from "../order/order-preview-item";
import { OrderPreviewList } from "../order/order-preview-list";

export const LatestOrders = (props) => {
  const { orders } = props;
  const [txs, setTxs] = useState([]);

  function exportCSV() {
    console.log("tf");
    if (!txs) return;
    const rows = [
      "Transaction Type",
      "Asset Name",
      "Amount",
      "Date Acquired",
      "Cost basis (USD)",
      "Value (USD)",
      "Gains (Losses) (USD)",
      "Data source",
    ];

    const data = txs.map((tx) => {
      return [
        tx.txIn ? "Receive" : "Sent",
        "ETH",
        tx.value / 1e18,
        new Date(tx.timeStamp * 1000),
        tx.price / 1e18,
        (tx.price / 1e18) * (tx.value / 1e18),
        tx.txIn
          ? (tx.price / 1e18) * (tx.value / 1e18)
          : `-${(tx.price / 1e18) * (tx.value / 1e18)}`,
        "Haircut",
      ];
    });

    data.unshift(rows);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((tx) => tx.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);

    window.open(encodedUri);
  }

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

      console.log(txs);
      txs = txs.map((tx) => {
        return {
          ...tx,
          txIn:
            tx.to.toLowerCase() ===
            "0x5C374722f9a19D36ec6F679DB27c38D2F8B8aC2b".toLowerCase(),
        };
      });
      setTxs(txs);
    }
    getAccountData();
  }, []);

  return (
    <Card variant="outlined" {...props}>
      <CardHeader
        action={
          <Button color="primary" variant="text" onClick={exportCSV}>
            Export Transactions
          </Button>
        }
        title="Transaction History"
      />
      <Divider />
      <OrderPreviewList>
        {txs.map((tx, index) => (
          <OrderPreviewItem
            divider={txs.length > index + 1}
            key={tx.id}
            order={tx}
          />
        ))}
      </OrderPreviewList>
    </Card>
  );
};

LatestOrders.propTypes = {
  orders: PropTypes.array,
};
