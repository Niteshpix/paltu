import { Button, Grid, Paper, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect } from "react";
import "./index.css";
import { Box } from "@mui/system";
import {  useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Redux/services/Apis";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Category() {
  const { items: data, status } = useSelector((state) => state.category);


  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getCategories())
  
  }, [dispatch])
  

  return (
    <div className="category">
      <div className="header">
        <h2>Category List</h2>
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
      <h3>Categories</h3>
      <Box sx={{ flexGrow: 1 }}>
      {status === "success" ? (
      <Grid container spacing={5}>
      {data && data!=='' &&
        data.data?.map((category) => (
        <Grid item xs={12}>
         <Item>
        
          <div key={category._id}>
          <h3>{category.title}</h3>
          
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
