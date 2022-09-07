import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useEffect, useState } from "react";
import "../index.css";
import { Link, useNavigate, useParams,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditUser, getProfile } from "../../Redux/services/Apis";

function EditUserForm() {
  const user= useSelector((state) => state.profile);
  console.log(user)
  const [editUser, setEditUser] = useState({
    name: user?.name,
    email: user?.email,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
console.log(editUser, "---------------------")

  const params = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(
        EditUser({
          _id: params.id,
          name: editUser.name,
          email: editUser.email,
        })
      );
    } else {
      // dispatch(createTask(task));
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
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="box">
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
