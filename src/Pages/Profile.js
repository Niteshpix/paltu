import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/services/Apis";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function Profile() {
  const user = useSelector((state) => state.profile);

  console.log(user, "================");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className="sevices">
      <div className="header">
        <h2>User List</h2>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          New Data
        </Button>
      </div>
      <div className="clist">
        <h3>Select</h3>
      </div>
    </div>
  );
}

export default Profile;
