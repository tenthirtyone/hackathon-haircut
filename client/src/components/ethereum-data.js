import { Box, Container, Link, Typography } from "@material-ui/core";

const data = {
  blockNumber: "10647176",
  timeStamp: "1652114492",
  hash: "0xc020a42113bf3ab18996e34256628cb0a1783b182ebbf400bbfbb2251b70d7ef",
  nonce: "20",
  blockHash:
    "0xebb9a05f50aeddd2dfcea5b6c4f9113708b411256abea7a3b49b60b2de256d28",
  transactionIndex: "37",
  from: "0x8d0726f5b95bec4d1048ca8ef919b0fcbcafbe2b",
  to: "0x5c374722f9a19d36ec6f679db27c38d2f8b8ac2b",
  value: "180000000000000000",
  gas: "21000",
  gasPrice: "20250850907",
  isError: "0",
  txreceipt_status: "1",
  input: "0x",
  contractAddress: "",
  cumulativeGasUsed: "12753950",
  gasUsed: "21000",
  confirmations: "32721",
  price: "2541514726064366026752",
};

export const EthereumData = () => (
  <div>
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: {
          sm: "row",
          xs: "column",
        },
        py: 3,
        "& a": {
          mt: {
            sm: 0,
            xs: 1,
          },
          "&:not(:last-child)": {
            mr: {
              sm: 5,
              xs: 0,
            },
          },
        },
      }}
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  </div>
);
