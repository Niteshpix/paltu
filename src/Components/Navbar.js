import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../Components/SlidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./index.css";
import { IconContext } from "react-icons";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Navbar() {
  const [isLogged, setisLogged] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    checkStorage();
    return () => {};
  }, [isLogged]);

  function checkStorage() {
    if (localStorage.getItem("token", "token")) {
      setisLogged(true);
    } else {
      setisLogged(false);
    }
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setisLogged(false);
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <>
            {!isLogged ? (
              <Link
                className="menu-bars"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Paltu
              </Link>
            ) : (
              <>
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>

                <Box sx={{ flexGrow: 0.98 }} />
                <Box sx={{display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleOpenUserMenu}
                    color="inherit"
                  >
                    <Avatar />


                  </IconButton>
                </Box>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >

                  <MenuItem>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/"  onClick={logout}  style={{textDecoration:"none"}}>
                      <Typography textAlign="center">
                        Logout
                      </Typography>
                    </Link>
                  </MenuItem>
                </Menu>



              </>
            )}
          </>
        </div>
      
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    
        </IconContext.Provider>
    </div>
  );
}

export default Navbar;
