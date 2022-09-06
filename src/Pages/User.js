import { Button, Grid, Paper, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect } from "react";
import "./index.css";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {  getUser } from "../Redux/services/Apis";
// import { IMAGE_URL } from "../Config/axiosConfig";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function User() {
  const { items: data, status } = useSelector((state) => state.user);

  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="sevices">
      <div className="header">
        <h2>User List</h2>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          New Data
        </Button>
      </div>
      <div className="clist">
        <h3>Select</h3>
        <Box sx={{ flexGrow: 1 }}>
          {status === "success" ? (
            <Grid container spacing={5}>
              {data &&
                data !== "" &&
                data.data?.map((users) => (
                  <Grid item xs={12}>
                    <Item>
                      <div key={users._id}>
                        <h3>{users.name}</h3>
{/* 
                         <img  src={`${IMAGE_URL}${service.image}` } 
                          alt=""
                          style={{
                            width: "30%",
                            border: "2px solid red",
                            height: "10vh",
                          }}
                        /> */}
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
