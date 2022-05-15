import { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, IconButton, List } from "@material-ui/core";
import { DashboardSidebarItem } from "./dashboard-sidebar-item";
import { Scrollbar } from "./scrollbar";
import { ChevronLeft as ChevronLeftIcon } from "../icons/chevron-left";
import { ChevronRight as ChevronRightIcon } from "../icons/chevron-right";
import { Cog as CogIcon } from "../icons/cog";
import { ColorSwatch as ColorSwatchIcon } from "../icons/color-swatch";
import { CustomChartPie as ChartPieIcon } from "../icons/custom-chart-pie";
import { CustomCube as CubeIcon } from "../icons/custom-cube";
import { CustomShoppingCart as ShoppingCartIcon } from "../icons/custom-shopping-cart";
import { CustomUsers as UsersIcon } from "../icons/custom-users";
import { DocumentText as DocumentTextIcon } from "../icons/document-text";
import { OfficeBuilding as OfficeBuildingIcon } from "../icons/office-building";
import { ReceiptTax as ReceiptTaxIcon } from "../icons/receipt-tax";
import { Template as TemplateIcon } from "../icons/template";

const items = [
  {
    icon: ChartPieIcon,
    title: "Reports",
    items: [
      {
        href: "/dashboard/reports",
        title: "Overview",
      },
      {
        href: "/dashboard/reports/sales",
        title: "Sales",
      },
    ],
  },

  {
    icon: CubeIcon,
    title: "Chain Data",
    items: [
      {
        href: "/dashboard/networks/ethereum",
        title: "Ethereum",
      },
    ],
  },
];

export const DashboardSidebar = (props) => {
  const { onPin, pinned } = props;
  const { pathname } = useLocation();
  const [openedItem, setOpenedItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [activeHref, setActiveHref] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleOpenItem = (item) => {
    if (openedItem === item) {
      setOpenedItem(null);
      return;
    }

    setOpenedItem(item);
  };

  useEffect(() => {
    items.forEach((item) => {
      if (item.items) {
        for (let index = 0; index < item.items.length; index++) {
          const active = matchPath(
            { path: item.items[index].href, end: true },
            pathname
          );

          if (active) {
            setActiveItem(item);
            setActiveHref(item.items[index].href);
            setOpenedItem(item);
            break;
          }
        }
      } else {
        const active = !!matchPath({ path: item.href, end: true }, pathname);

        if (active) {
          setActiveItem(item);
          setOpenedItem(item);
        }
      }
    });
  }, [pathname]);

  return (
    <Drawer
      open
      sx={{ zIndex: 1000 }}
      variant="permanent"
      PaperProps={{
        onMouseOver: () => {
          setHovered(true);
        },
        onMouseLeave: () => {
          setHovered(false);
        },
        sx: {
          backgroundColor: "background.paper",
          height: "calc(100% - 64px)",
          overflowX: "hidden",
          top: 64,
          transition: "width 250ms ease-in-out",
          width: pinned ? 270 : 73,
          "& .simplebar-content": {
            height: "100%",
          },
          "&:hover": {
            width: 270,
            "& span, p": {
              display: "flex",
            },
          },
        },
      }}
    >
      <Scrollbar
        style={{
          display: "flex",
          flex: 1,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 2,
          }}
        >
          <List disablePadding>
            {activeItem &&
              items.map((item) => (
                <DashboardSidebarItem
                  active={activeItem?.title === item.title}
                  activeHref={activeHref}
                  key={item.title}
                  onOpen={() => handleOpenItem(item)}
                  open={openedItem?.title === item.title && (hovered || pinned)}
                  pinned={pinned}
                  {...item}
                />
              ))}
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          <Box sx={{ pt: 1 }}>
            <IconButton onClick={onPin}>
              {pinned ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Box>
        </Box>
      </Scrollbar>
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onPin: PropTypes.func,
  pinned: PropTypes.bool,
};
