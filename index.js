require("dotenv").config();
const { ethers } = require("ethers");
const Airswap = require("./airswap");
const db = require("./db");
const express = require("express");
const fetch = require("node-fetch");
const app = new express();
const airswap = new Airswap();

const { INFURA, ETHERSCAN } = process.env;
const ropsten = `wss://rinkeby.infura.io/ws/v3/${INFURA}`;
const provider = new ethers.providers.WebSocketProvider(ropsten, "ropsten");

provider.on("block", (number) => {
  airswap.getPrice((err, results) => {
    if (err) return;

    console.log(
      `The spot price of ETH at block ${number} is: ${
        results.senderAmount / 1e18
      }`
    );
    db.put(number, results.senderAmount);
  });
});

app.listen(4000, () => {
  console.log("listening on 4k");
});

app.get("/transactions/:address", async (req, res) => {
  const { address } = req.params;
  const etherscan = `https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=10647176&endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETHERSCAN}`;
  let data, transactions;
  try {
    data = await fetch(etherscan);
    data = await data.json();
    transactions = data.result;
  } catch (e) {
    console.log(e);
  }

  transactions = transactions.map(async (tx) => {
    let price = 0;
    try {
      price = await db.get(tx.blockNumber);
    } catch (e) {
      price = 0;
      console.log(e);
    }

    return {
      ...tx,
      price,
    };
  });

  res.send(await Promise.all(transactions));
});
