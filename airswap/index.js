const url = require("url");
const jayson = require("jayson");

class Airswap {
  constructor() {
    this.locator = "https://ast.ngrok.io";
    this.method = "getSenderSideOrder";
    this.params = {
      signerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      senderToken: "0x6b175474e89094c44da98b954eedeac495271d0f",
      swapContract: "0x522D6F36c95A1b6509A14272C17747BbB582F2A6",
      senderWallet: "0x80AE64aEd9A03C0423cd27fbA38a497F37c5A80F",
      signerAmount: "1000000000000000000",
    };
    this.timeout = 4000;
  }
  // https://github.com/airswap/airswap-cli/blob/75f870a2761123c9860697d6e35f73cbe1c08591/src/lib/requests.ts#L30
  async getPrice(callback) {
    let client;
    const { locator, method, params, timeout } = this;
    if (/^ws:\/\//.test(locator) || /^wss:\/\//.test(locator)) {
      callback(`Invalid URL for HTTP RFQ`, null);
    } else {
      if (!/^http:\/\//.test(locator) && !/^https:\/\//.test(locator)) {
        locator = `https://${locator}`;
      }

      const locatorUrl = url.parse(locator);
      const options = {
        protocol: locatorUrl.protocol,
        hostname: locatorUrl.hostname,
        path: locatorUrl.path,
        port: locatorUrl.port,
        timeout,
      };

      if (options.protocol === "http:") {
        client = jayson.Client.http(options);
      } else if (options.protocol === "https:") {
        client = jayson.Client.https(options);
      }

      client.request(method, params, function (err, error, result) {
        if (err) {
          callback(`Server: ${locator} \n ${err}`, null);
        } else if (error) {
          callback(`Server: ${error.message}`, null);
        } else if (result) {
          callback(null, result);
        } else {
          callback(null, null);
        }
      });
    }
  }
}

module.exports = Airswap;
