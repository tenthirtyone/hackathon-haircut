const { Level } = require("level");

const db = new Level("prices", { valueEncoding: "json" });

module.exports = db;
