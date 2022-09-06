import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState, useEffect } from "react";
import "../index.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditUser, getProfile } from "../../Redux/services/Apis";

function EditUserForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  const [editUser, setEditUser] = useState({
    name: user?.name,
    email: "",
    phone: "",
  });


  const handleChange = (e) => {
    setEditUser({ ...user, [e.target.name]: e.target.value });
  };
  
  // console.log(editUser,'editUser',user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(
        EditUser({
          id: params.id,
          name: editUser.name,
          email: editUser.email,
          phone: editUser.phone,
        })
      );
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getProfile(params.id);
        setEditUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadUser();
  }, [params.id]);

  return (
    <div className="Edit User">
      <Link to={"/user"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45  vh" }}>
          <form onSubmit={handleSubmit}>
            <h1>Edit User</h1>
            <Grid container Spacing={5}>
              <Grid item sm={12}>
                <Typography variant="caption">Name</Typography>
                <TextField
                  fullWidth
                  placeholder=" Name"
                  onChange={handleChange}
                  name="name"
                  value={editUser?.name}
                />
              </Grid>
              {/* 
              <Grid item sm={12}>
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder="email"
                  onChange={handleChange}
                  email="email"
                   value={editUser?.email}
                />
              </Grid>
              <Grid item sm={12}>
                <Typography variant="caption">Phone</Typography>
                <TextField
                  fullWidth
                  placeholder="phone"
                  onChange={handleChange}
                  phone="phone"
                />
              </Grid> */}
            </Grid>
            <Grid item sx={{ marginTop: "100px" }}></Grid>
            <Button
              size="large"
              color="secondary"
              type="submit"
              variant="contained"
              //disabled={loadingSubmit}
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
