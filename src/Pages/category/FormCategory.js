import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function FormCategory() {
  return (
    <div className="category">
      <Link to={"/category"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
          <form>
            <h1>Form Category</h1>
            <Grid container Spacing={5}>
              <Grid item sm={12}>
                <Typography variant="caption">Category Name</Typography>
                <TextField fullWidth placeholder="Category Name" />
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <input type="file" alt="Submit" />

              <Button
                size="large"
                color="secondary"
                type="submit"
                variant="contained"
                //disabled={loadingSubmit}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default FormCategory;
