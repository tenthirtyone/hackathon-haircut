import { useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { format } from "date-fns";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Link,
  ListItem,
  Typography,
} from "@material-ui/core";
import { ChevronDown as ChevronDownIcon } from "../../icons/chevron-down";
import { Status } from "../status";
import { OrderSummary } from "./order-summary";

const statusVariants = [
  {
    color: "info.main",
    label: "Placed",
    value: "placed",
  },
  {
    color: "error.main",
    label: "Processed",
    value: "processed",
  },
  {
    color: "warning.main",
    label: "Delivered",
    value: "delivered",
  },
  {
    color: "success.main",
    label: "Complete",
    value: "complete",
  },
];

export const OrderPreviewItem = (props) => {
  const { order, ...other } = props;
  const [expanded, setExpanded] = useState(false);
  const statusVariant = statusVariants.find(
    (variant) => variant.value === order.status
  );
  console.log(order);
  const handleExpandedChange = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <ListItem
      disableGutters
      disablePadding
      key={order.hash}
      sx={{
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
      }}
      {...other}
    >
      <Box
        sx={{
          display: {
            sm: "flex",
            xs: "block",
          },
          p: 2,
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              mr: 2,
              px: 1.5,
              py: 0.5,
            }}
          >
            <Typography color="textSecondary" variant="h5">
              {format(new Date(parseInt(order.timeStamp, 10) * 1000), "dd")}
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {format(new Date(parseInt(order.timeStamp, 10) * 1000), "MMM yy")}
            </Typography>
          </Box>
          <div>{`#${order.hash}`}</div>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            ml: {
              sm: 0,
              xs: 1.5,
            },
          }}
        >
          <Status color={"#38b249"} label={"Complete"} />
          <IconButton onClick={handleExpandedChange} sx={{ ml: 3 }}>
            <ChevronDownIcon
              sx={{
                transition: "transform 150ms",
                transform: expanded ? "rotate(180deg)" : "none",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Collapse in={expanded}>
        <Divider />
        <OrderSummary order={order} />
      </Collapse>
    </ListItem>
  );
};

OrderPreviewItem.propTypes = {
  order: PropTypes.object.isRequired,
};
