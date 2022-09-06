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
   console.log(user,'================');

  // const existingUser=data.filter(user=>user.id===params.id);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(editUser);
  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(
        EditUser({
          _id: params.id,
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
    const loadTask = async () => {
      try {
        const response = await getProfile(params.id);
        setEditUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTask();
  }, [params.id]);
  console.log(editUser,'editUser')

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
                  value={editUser?.name?editUser?.name:''}
                />
              </Grid>

              <Grid item sm={12}>
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder="email"
                  onChange={handleChange}
                  email="email"
                  // value={editUser.email}
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
              </Grid>
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
