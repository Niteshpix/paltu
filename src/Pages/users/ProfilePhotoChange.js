import ReplyAll from '@mui/icons-material/ReplyAll';
import { Button, Card, Grid,Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UpdateProfilePhoto } from '../../Redux/services/Apis';

function ProfilePhotoChange() {

    const [profilephoto, setProfilePhoto] = useState({
         photo: ""
      });
    const dispatch =useDispatch();
      console.log(profilephoto);
    
      const HandleChange = (e) => {
        setProfilePhoto({
          ...profilephoto,
          [e.target.name]: e.target.value,
        });
      };
    
      const {  photo } = profilephoto;
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateProfilePhoto(profilephoto));
        alert("update photo");
      };

  return (
    <div className="profilephoto">
    <Link to={"/user"}>
      <ReplyAll />
    </Link>
    <div className="header">
      <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
        <form onSubmit={handleSubmit} onChange={HandleChange}>
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
            <input type="file" alt="Submit" name="photo" value={photo} />

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

export default ProfilePhotoChange