import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Grid, Button } from "@material-ui/core";
import { Bills } from "../components/reports/bills";
import { LatestOrders } from "../components/reports/latest-orders";
import { Notifications } from "../components/reports/notifications";
import { OrdersOverview } from "../components/reports/orders-overview";
import { SummaryItem } from "../components/reports/summary-item";
import { Cube as CubeIcon } from "../icons/cube";
import { ShoppingCart as ShoppingCartIcon } from "../icons/shopping-cart";
import { CustomCreditCard as CustomCreditCardIcon } from "../icons/custom-credit-card";
import gtm from "../lib/gtm";

export const ReportsOverview = () => {
  const [account, setAccount] = useState(null);
  useEffect(() => {
    async function getMMAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      console.log(accounts);
    }
    gtm.push({ event: "page_view" });

    if (window.ethereum) {
      getMMAccount();
      window.ethereum.on("accountsChanged", function (accounts) {
        location.reload();
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Reports: Overview </title>
      </Helmet>
      <Box sx={{ backgroundColor: "background.default" }}>
        {account === null ? (
          <Button
            color="primary"
            variant="text"
            onClick={async () => {
              await ethereum.request({ method: "eth_requestAccounts" });
            }}
          >
            Enable Metamask
          </Button>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Bills account={account} />
            </Grid>

            <Grid item md={12} xs={12}>
              <LatestOrders account={account} />
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};
