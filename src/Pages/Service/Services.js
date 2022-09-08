import { Button, Grid, Paper, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect } from "react";
import "../index.css";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, getServices } from "../../Redux/services/Apis";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { IMAGE_URL } from "../../Config/axiosConfig";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Services() {
  const { data, status } = useSelector((state) => state.services);
  //console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `create`;
    navigate(path);
  };

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <div className="box">
      <div className="header">
        <h2>Services List</h2>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={routeChange}
        >
          New Data
        </Button>
      </div>
      <div className="clist">
        <h3>Services</h3>
        <Box sx={{ flexGrow: 1 }}>
          {status === "success" ? (
            <Grid container spacing={5}>
              {data &&
                data !== "" &&
                data?.map((service) => (
                  <Grid item xs={12} key={service._id}>
                    <Item>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          justifyContent: "space-between",
                        }}
                      >
                        <img
                          src={`${IMAGE_URL}${service.image}`}
                          style={{ height: 70, width: 80 }}
                          alt=""
                        />
                        <div className="title">
                        <h3 style={{color:"#00FFFF"}}>{service.title}</h3>
                        <p>{service.description}</p>
                        </div>
                        <div className="icn">
                          <EditIcon />
                          <DeleteForeverIcon
                            onClick={() => handleDelete(service._id)}
                          />
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

export default Services;
