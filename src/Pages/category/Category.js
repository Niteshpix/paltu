import { Button, Grid, Paper, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect } from "react";
import { Box } from "@mui/system";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategories } from "../../Redux/services/Apis";
import { IMAGE_URL } from "../../Config/axiosConfig";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Category() {
  const { data, status } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `create`;
    navigate(path);
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className="box">
      <div className="header">
        <h2>Category List</h2>
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

      <div className="search">
        <input
          style={{
            padding: "10px",
            width: "30rem",
            borderRadius: "8px",
            marginLeft: "10px",
          }}
          type="search"
          placeholder="Search Category"
        />
      </div>

      <div className="clist">
        <h3>Categories</h3>
        <Box sx={{ flexGrow: 1 }}>
          {status === "success" ? (
            <Grid container spacing={5}>
              {data?.map((category) => (
                <Grid item xs={12} key={category?._id}>
                  <Item>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={`${IMAGE_URL}${category?.image}`}
                        style={{ height: 70, width: 80 }}
                        alt=""
                      />
                      <h3>{category?.title}</h3>
                      <div className="icn">
                        <DeleteForeverIcon
                          onClick={() => handleDelete(category._id)}
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

export default Category;
