import { Button, Grid, Paper, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect } from "react";
import { Box } from "@mui/system";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../Config/axiosConfig";
import { getUser } from "../../Redux/services/Apis";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function User() {
  const { items: data, status } = useSelector((state) => state.user);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `create`;
    navigate(path);
  };

  return (
    <div className="User">
      <div className="header">
        <h2>USER LIST</h2>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={routeChange}
        >
          New Data
        </Button>
      </div>

      <div className="search">
        <input
          style={{
            padding: "10px",
            width: "30rem",
            borderRadius: "8px",
            marginLeft: "10px",
          }}
          type="search"
          placeholder="Search User"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="clist">
        <h3>User</h3>
        <Box sx={{ flexGrow: 1 }}>
          {status === "success" ? (
            <Grid container spacing={5}>
              {data.data?.length === 0 && (
                <div>
                  <Item colSpan={2} align="center">
                    No Data
                  </Item>
                </div>
              )}
              {data &&
                data !== "" &&
                data.data?.map((users) => (
                  <Grid item xs={12} key={users._id}>
                    <Item>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          justifyContent: "space-between",
                        }}
                      >
                        <img
                          src={`${IMAGE_URL}${users.image}`}
                          style={{ height: 70, width: 80 }}
                          alt=""
                        />
                        <h3>{users.name}</h3>
                        <h3>{users.phone}</h3>
                        <div className="icn">
                        <Link to="/edituser/:id">  <EditIcon /></Link>
                          <DeleteForeverIcon />
                          <MoreVertIcon />
                        </div>
                      </div>
                    </Item>
                  </Grid>
                ))}
            </Grid>
          ) : status === "pending" ? (
            <p>Loading...</p>
          ) : (
            <p>Unexpected error occured...</p>
          )}
        </Box>
      </div>
    </div>
  );
}

export default User;
