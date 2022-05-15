import PropTypes from "prop-types";
import numeral from "numeral";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Scrollbar } from "../scrollbar";

export const OrderSummary = (props) => {
  const { order, ...other } = props;

  return (
    <Scrollbar>
      <Table sx={{ minWidth: 500 }} {...other}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Amount ETH</TableCell>
            <TableCell />
            <TableCell />
            <TableCell>{order.value / 1e18}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Spot Price (USD)</TableCell>
            <TableCell />
            <TableCell />
            <TableCell>
              {numeral(order.price / 1e18).format(`$0,0.00`)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Incoming / Outgoing</TableCell>
            <TableCell />
            <TableCell />
            <TableCell>{order.txIn ? "Incoming" : "Outgoing"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography color="textPrimary" variant="subtitle2">
                Total
              </Typography>
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell>
              <Typography color="textPrimary" variant="subtitle2">
                {numeral(((order.value / 1e18) * order.price) / 1e18).format(
                  `$0,0.00`
                )}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Scrollbar>
  );
};

OrderSummary.propTypes = {
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  order: PropTypes.object,
};
