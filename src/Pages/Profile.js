import { Box, Grid, MenuItem, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../Config/axiosConfig";
import "../index.css";
import { deleteUser } from "../Redux/services/Apis";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Profile() {
  const { user } = useSelector((state) => state.profile);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleEdit = (id) => {
    navigate(`edituser/${id}`);
  };
  const handlechange = () => {
    navigate("/changepassword");
  };
  return (
    <div
      className="User"
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <h2 style={{ textAlign: "center" }}>Profile</h2>
      <div  style={{ margin: "auto", borderRadius:"50%"}}>
        <Grid item xs={12} >
          <Item>
            <div
              style={{
                display: "flex",
                gap: "12px",
                width: "100%",
                height: "20vh",
              }}
            >
              <Link to="/photochnage">
                {" "}
                <img
                  src={`${IMAGE_URL}${user?.photo}`}
                  alt="hii"
                  style={{
                    width: "150px",
                    margin: "auto",
                    borderRadius: "50%",
                  }}
                />
              </Link>
            </div>
          </Item>
        </Grid>
      </div>
      <Grid item xs={12} style={{ display: "flex", margin: "auto" }}>
        <Box>
          <MenuItem>
            <div className="icn" style={{ textAlign: "center" }}>
              <Typography textAlign="center">{user?.name}</Typography>
            </div>
          </MenuItem>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ display: "flex", margin: "auto" }}>
        <Box>
          <MenuItem>
            <div className="icn" style={{ textAlign: "center" }}>
              <Typography textAlign="center">{user?.email}</Typography>
            </div>
          </MenuItem>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ display: "flex", margin: "auto" }}>
        <Box>
          <MenuItem>
            <div className="icn" style={{ textAlign: "center" }}>
              <Typography
                textAlign="center"
                onClick={() => handleEdit(user?._id)}
              >
                Edit profile
              </Typography>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="icn" style={{ textAlign: "center" }}>
              <Typography textAlign="center" onClick={handlechange}>
                Change password
              </Typography>
            </div>
          </MenuItem>
          
        </Box>
      </Grid>
      <Grid item xs={12} style={{ display: "flex", margin: "auto" }}>
        <Box>
          <MenuItem>
            <div className="icn" style={{ textAlign: "center" }}>
              <div onClick={() => handleDelete(user._id)} className="del">
                <Typography>Delete acount</Typography>
              </div>
            </div>
          </MenuItem>
        </Box>
      </Grid>
    </div>
  );
}
export default Profile;
