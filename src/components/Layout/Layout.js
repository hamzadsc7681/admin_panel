import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//sidebar icons...
// import DashboardIcon from "@mui/icons-material/Dashboard";
import { MdOutlineSpaceDashboard } from "react-icons/md";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GiShoppingCart } from "react-icons/gi";
// import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { FiUsers } from "react-icons/fi";
// import CategoryIcon from "@mui/icons-material/Category";
import { BiCategoryAlt } from "react-icons/bi";
// import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { AiOutlineDollarCircle } from "react-icons/ai";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//logo
import hLogo from "../../assests/hospitallogo.jpg";
//manue..
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, isActive] = React.useState()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const sideBarData = [
    {
      title: "Dashboard",
      icon: <MdOutlineSpaceDashboard />,
      path: "/",
    },
    {
      title: "Orders",
      icon: <GiShoppingCart />,
      path: "/orders",
    },
    {
      title: "Users",
      icon: <FiUsers />,
      path: "/users",
    },
    {
      title: "Products",
      icon: <BiCategoryAlt />,
      path: "/products",
    },
    {
      title: "Earning",
      icon: <AiOutlineDollarCircle />,
      path: "/earning",
    },
  ];
  const drawer = (
    <div>
      <Toolbar className="flex" style={{backgroundColor:'#1e3a8a'}}>
        {/* <img src={hLogo} alt="" className="h-[63px] object-contain" /> */}
        <div>
          <span className="font-semibold text-white">Care online</span>
          <h1 className="text-xs tracking-widest text-white  opacity-50">Pharmacy</h1>
        </div>
      </Toolbar>
     
      <List style={{marginLeft:'10px', marginRight:'10px', borderRadius:'7px'}}>
        {sideBarData.map((val, index) => (
          <Link
            to={val.path}
            style={{ textDecoration: "none", color: "#1e3a8a" }}
          >
            <ListItem
            
              sx={{
                borderRadius:'7px',
               
                ":hover": {
                  background: "#1e3a8a",
                  color: "white",
                  borderRadius:'7px'
                },
              }}
              button
              key={index}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                }}
                style={{
                  position: "relative",
                  left: "15px",
                  top: "-1px",
                  fontSize: "24px",
                }}
              >
                {val.icon}
              </ListItemIcon>
              <ListItemText primary={val.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //toggles fro menue..
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
        style={{ background: "#1e3a8a", color: "black" }}
      >
        <Toolbar className="bg-white!">
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
            style={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex w-full items-center">
            <h4
              className="h-max w-max hidden md:inline-flex"
              style={{ color: "white", fontWeight: "500", paddingTop: "10px" }}
            >
              {props.title}
            </h4>
            <div
              className="flex-1 flex justify-end
                        "
            >
              <div
                style={{
                  borderRadius: "25px",
                  width: "200px",
                  backgroundColor: "white",
                }}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="flex items-center cursor-pointer
                                space-x-2 bg-green-50
                                "
              >
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    height: "40px",
                    width: "40px",
                  }}
                >
                  SS
                </Avatar>
                <span style={{ color: "#1e3a8a", fontWeight: "500" }}>
                  Syed Salleh
                </span>
                <KeyboardArrowDownIcon
                  className="text-blue-900"
                  style={{ marginLeft: "35px" }}
                />
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  style={{ color: "#1e3a8a", fontWeight: "500" }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  style={{ color: "#1e3a8a", fontWeight: "500" }}
                >
                  My account
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  style={{ color: "#1e3a8a", fontWeight: "500" }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {/* <div className='mt-16'> */}
        {props.children}
        {/* </div> */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
