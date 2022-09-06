import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../Components/SlidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./index.css";
import { IconContext } from "react-icons";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/services/Apis";

function Navbar() {
  const [isLogged, setisLogged] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
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
  const dispatch = useDispatch();

<<<<<<< HEAD
  const { items: data } = useSelector((state) => state.profile);
  //console.log(data)
=======
  const { user} = useSelector((state) => state.profile);
  
>>>>>>> 5640793e67b5069cbca2edaf77365850b04eb820

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/edituser/${id}`);
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
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
<<<<<<< HEAD
                 <Link to="/profile" style={{textDecoration:"none"}}><Typography textAlign="center">{data?.data?.name}</Typography></Link>
=======
                    <Typography
                      textAlign="center"
                      onClick={() => handleEdit(user?._id)}
                    >
                      {user?.name}
                    </Typography>
>>>>>>> 5640793e67b5069cbca2edaf77365850b04eb820
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/"
                      onClick={logout}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography textAlign="center">Logout</Typography>
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
