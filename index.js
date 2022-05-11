require("dotenv").config();
const { ethers } = require("ethers");
const Airswap = require("./airswap");
const db = require("./db");
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = new express();
const airswap = new Airswap();

const { INFURA, ETHERSCAN } = process.env;
const ropsten = `wss://rinkeby.infura.io/ws/v3/${INFURA}`;
const provider = new ethers.providers.WebSocketProvider(ropsten, "ropsten");

let latest = {
  block: 0,
  price: 0,
};

provider.on("block", (number) => {
  airswap.getPrice((err, results) => {
    if (err) return;

    console.log(
      `The spot price of ETH at block ${number} is: ${
        results.senderAmount / 1e18
      }`
    );
    console.log(number, results.senderAmount);
    db.put(number, results.senderAmount);
    latest = {
      block: number,
      price: results.senderAmount,
    };
  });
});

app.use(cors());

app.listen(4000, () => {
  console.log("listening on 4k");
});

app.get("/price/latest", async (req, res) => {
  return res.status(200).send(latest);
});

app.get("/price/block/:block", async (req, res) => {
  let price;
  const { block } = req.params;

  try {
    price = await db.get(block);
  } catch (e) {
    console.log(e);
    return res.status(404).send();
  }
  return res.status(200).send({ block, price });
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
