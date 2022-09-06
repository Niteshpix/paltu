// import { Button, Grid, Paper, styled } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import React, { useEffect } from "react";
// import "./index.css";
// import { Box } from "@mui/system";
// import { useDispatch, useSelector } from "react-redux";
// import {  getProfile} from "../Redux/services/Apis";


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// function Profile() {
//   const { items: data, status } = useSelector((state) => state.profile);

//   console.log(data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProfile());
//   }, [dispatch]);

//   return (
//     <div className="sevices">
//       <div className="header">
//         <h2>User List</h2>
//         <Button
//           size="small"
//           variant="contained"
//           color="secondary"
//           startIcon={<AddIcon />}
//         >
//           New Data
//         </Button>
//       </div>
//       <div className="clist">
//         <h3>Select</h3>
//         <Box sx={{ flexGrow: 1 }}>
//           {status === "success" ? (
//             <Grid container spacing={5}>
//               {/* {
//                data?. data.map((users) => (
//                   <Grid item xs={12}>
//                     <Item>
//                       <div key={users._id}>
//                         <h3>{users.name}</h3>

//                       </div>
//                     </Item>
//                   </Grid>
//                 ))} */}
//                 <h1>{data.data?.name}</h1>
//             </Grid>
//           ) : status === "pending" ? (
//             <p>Loading...</p>
//           ) : (
//             <p>Unexpected error occured...</p>
//           )}
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default Profile;
