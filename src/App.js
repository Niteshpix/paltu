import "./App.css";
import Navbar from "./Components/Navbar";

import "./App.css";
import Layout from "./Layout/Layout";
import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_BE_URL;
function App() {
  return (
    <>
      <Navbar />
       <Layout />
    </>
  );
}

export default App;
