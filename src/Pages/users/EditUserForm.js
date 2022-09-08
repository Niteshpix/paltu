import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useEffect, useState } from "react";
import "../index.css";
import { Link, useParams,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditUser, getProfile } from "../../Redux/services/Apis";

function EditUserForm() {
  const user= useSelector((state) => state.profile);

  const [editUser, setEditUser] = useState({
    name: user?.name,
    email: user?.email,
  });
  const dispatch = useDispatch();
  const params = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editUser)

    if (params.id) {
      dispatch(
        EditUser({
          _id: params.id,
          name: editUser.name,
          email: editUser.email,
        })
      );
    } else {
      
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await getProfile(params.id);
        setEditUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTask();
  }, [params.id]);

  const handleChange = (e) => {
    console.log(e.target.value,e.target.name)
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="box">
      <Link to={"/profile"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45  vh" }}>
          <form onSubmit={handleSubmit}>
            <h1>Edit your profile</h1>
            <Grid container>
              <Grid item sm={12}>
                <Typography variant="caption">Name</Typography>
                <TextField
                  fullWidth
                  placeholder=" Name"
                  name="name"
                  value={editUser?.name}
                  onChange={handleChange}
                 
                />
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder=" Email"
                  name="email"
                  value={editUser?.email}
                  onChange={handleChange}
                  
                />
              </Grid>
              
              {/* <Grid item sm={12}>
                <Typography variant="caption">Phone</Typography>
                <TextField
                  fullWidth
                  placeholder="phone"
                  onChange={handleChange}
                  phone="phone"
                  value={user?.phone}
                />
              </Grid>  */}
            </Grid>
            <Grid item sx={{ marginTop: "100px" }}></Grid>
            <Button
              size="large"
              color="secondary"
              type="submit"
              variant="contained"
              
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default EditUserForm;
