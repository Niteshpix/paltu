import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { Link,} from "react-router-dom";

function EditUserForm() {
  
  const [editUser] = useState({
    name: "",
    email: "",
  });
  console.log(editUser, "------------")

  //console.log(editUser);
  // const onInputChange = (e) => {
  //   setEditUser({
  //     ...editUser,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // useEffect(() => {
  //   dispatch(getProfile({id}));
  // }, [dispatch, id]);


  // const onInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setEditUser({ ...editUser, [name]: value });
  // };
  //   const data = {
  //     id: editUser.id,
  //     name: editUser.name,
  //     email: editUser.email,

  //   };
  //   dispatch(EditUser({ id: editUser.id, data }))
  //     .then((response) => {
  //       //console.log(response);
  //       setEditUser({ ...editUser });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  // const updateContent = () => {
  //   dispatch(EditUser({ id: editUser.id, data: editUser }))
  //     .unwrap()
  //     .then((response) => {
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
 

  return (
    <div className="Edit User">
      <Link to={"/user"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45  vh" }}>
          <form>
            <h1>Edit User</h1>
            <Grid container Spacing={5}>
              <Grid item sm={12}>
                <Typography variant="caption">Name</Typography>
                <TextField
                  fullWidth
                  placeholder=" Name"
                  name="name"
                  value={editUser.name}
                />
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder=" Email"
                  name="email"
                  value={editUser.email}
                />
              </Grid>
              
              <Grid item sm={12}>
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder="email"
                  email="email"
                   value={editUser?.email}
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
