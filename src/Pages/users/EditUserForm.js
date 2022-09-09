import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useEffect, useState } from "react";
import "../index.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditUser, getUser } from "../../Redux/services/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditUserForm() {
  const data = useSelector((state) => state.userData);

  const [editUser, setEditUser] = useState({
    name: data?.name,
    email: data?.email,
    phone: data?.phone,
  });
  const dispatch = useDispatch();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(
        EditUser(
          {
            _id: params.id,
            name: editUser.name,
            email: editUser.email,
            phone: editUser.phone,
          },
          toast("User Profile Update Successfully")
        )
      );
    } else {
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await getUser(params.id);
        setEditUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTask();
  }, [params.id]);

  const handleChange = (e) => {
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

                <Typography variant="caption">Phone</Typography>
                <TextField
                  fullWidth
                  placeholder=" phone"
                  name="phone"
                  value={editUser?.phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid item sx={{ marginTop: "15px" }}>
              <Button
                size="large"
                color="secondary"
                type="submit"
                variant="contained"
              >
                Update
              </Button>
            </Grid>
            <ToastContainer />
          </form>
        </Card>
      </div>
    </div>
  );
}

export default EditUserForm;
