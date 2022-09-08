import { Grid, Paper, styled } from "@mui/material";
import React, { useEffect } from "react";
import { Box } from "@mui/system";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IMAGE_URL } from "../../Config/axiosConfig";
import { deleteUser, getUser } from "../../Redux/services/Apis";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function User() {
  const { data, status } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="box">
      <div className="header">
        <h2>User List</h2>
      </div>
      <div className="search">
        <input
          style={{
            padding: "10px",
            width: "30rem",
            borderRadius: "8px",
            marginLeft: "10px",
          }}
          type="search"
          placeholder="Search User"
        />
      </div>

      <div className="clist">
        <h3>User</h3>
        <Box sx={{ flexGrow: 1 }}>
          {status === "success" ? (
            <Grid container spacing={5}>
              {data?.length === 0 && (
                <div>
                  <Item colSpan={2} align="center">
                    No Data
                  </Item>
                </div>
              )}
              {
            
                data?.map((user) => (
                  <Grid item xs={12} key={user._id}>
                    <Item>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          justifyContent: "space-between",
                        }}
                      >
                        <img
                          src={`${IMAGE_URL}${user.image}`}
                          style={{ height: 70, width: 80 }}
                          alt=""
                        />
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>

                        <div className="icn">
                          <div className="del">
                            <div
                              onClick={() => handleDelete(user._id)}
                              className="del"
                            >
                              <DeleteForeverIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Item>
                  </Grid>
                ))}
            </Grid>
          ) : status === "pending" ? (
            <p>Loading...</p>
          ) : (
            <p>Unexpected error occured...</p>
          )}
        </Box>
      </div>
    </div>
  );
}

export default User;
