import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PaymentIcon from "@mui/icons-material/Payment";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import WarningIcon from "@mui/icons-material/Warning";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { Link } from "react-router-dom";

export default function TemporaryDrawer({ state, setState, toggleDrawer }) {
  const iconMap = {
    Dashboard: <DashboardIcon />,
    Analytics: <AnalyticsIcon />,
    "Pay Fines": <PaymentIcon />,
    "Find Vehicle": <FindInPageIcon />,
    "Recognitions": <CameraAltIcon />,
    Reports: <DescriptionIcon />,
    Emergency: <WarningIcon />,
    Licenses: <BadgeIcon />,
    Complaints: <LocalPoliceIcon />,
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {[
          { text: "Dashboard", route: "/dashboard" },
          { text: "Analytics", route: "/analytics" },
          { text: "Pay Fines", route: "/payfine" },
          { text: "Find Vehicle", route: "/vehicle" },
          { text: "Recognitions", route: "/recognitions" },
          { text: "Reports", route: "/reports" },
          { text: "Emergency", route: "/emergency" },
          { text: "Licenses", route: "/licenses" },
          { text: "Complaints", route: "/complaints" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.route}
              sx={{ "&:hover": { backgroundColor: "#c2c2c2" } }}>
              <ListItemIcon>{iconMap[item.text]}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
