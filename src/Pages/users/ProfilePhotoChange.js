import ReplyAll from "@mui/icons-material/ReplyAll";
import { Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateProfilePhoto } from "../../Redux/services/Apis";

function ProfilePhotoChange() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  const [profilephoto, setProfilePhoto] = useState({
    photo: user?.photo,
  });

  const handleChange = (e) => {
    setProfilePhoto({
      ...profilephoto,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateProfilePhoto(profilephoto));
  };

  return (
    <div className="profilephoto">
      <Link to={"/profile"}>
        <ReplyAll />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
          <form onSubmit={handleSubmit}>
            <h1>Update Photo</h1>
            <Grid>
              <Grid item sm={12}>
                <Typography variant="caption">profile Photo</Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <input
                type="file"
                alt="Submit"
                name="photo"
                accept="image/*"
                onChange={handleChange}
              />

              <Button
                size="large"
                color="secondary"
                type="submit"
                variant="contained"
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
