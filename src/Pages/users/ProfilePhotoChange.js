import ReplyAll from "@mui/icons-material/ReplyAll";
import { Button, Card, Grid, Typography } from "@mui/material";
import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import {  UpdateProfilePhoto } from "../../Redux/services/Apis";

function ProfilePhotoChange() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile);
  const [profilephoto, setProfilePhoto] = useState({
    image: "",
  });


  function handleChange(e) {
    console.log(e.target.files);
    setProfilePhoto({
      ...profilephoto,
      [e.target.name]: e.target.value,
    });
  }


const {image} =user
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(
      UpdateProfilePhoto({
        profilephoto
      })
    );
  };


  return (
    <div className="profilephoto">
      <Link to={"/user"}>
        <ReplyAll />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
          <form onSubmit={handleSubmit}>
            <h1>Update Photo</h1>
            <Grid>
              <Grid item sm={12}>
                <Typography variant="caption">profile Photo</Typography>
                {/* <TextField
                fullWidth
                placeholder="photo"
                name="title"
                value={title}
              /> */}
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <input
                type="file"
                alt="Submit"
                name="file"
                accept="image/*"
                value={image}
                onChange={handleChange}
              />

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

export default ProfilePhotoChange;
