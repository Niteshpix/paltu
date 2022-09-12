import { Grid} from "@mui/material";

import React, { useEffect } from "react";
import { Box } from "@mui/system";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";

import { getUserWithSevice } from "../Redux/services/Apis";



function Userservice() {
  const { data, status } = useSelector((state) => state.profile);
  console.log(data, "=============")

  console.log(data);
  const dispatch = useDispatch();

  useEffect((id) => {
    dispatch(getUserWithSevice(id));
  }, [dispatch]);

  return (
    <div className="box">
      <div className="header">
        <h2>user Service</h2>
        {/* <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={routeChange}
        >
          New Data
        </Button> */}
      </div>

      <div className="clist">
        <h3>Services</h3>
        <Box sx={{ flexGrow: 1 }}>
          {status === "success" ? (
            <Grid container spacing={5}>
                <h1>{data._id}</h1>
          
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

export default Userservice;
