import React from "react";
import { setHeaders } from "../../Config/axiosConfig";

const ProfilePhotoChange = () => {
  const setImageAction = async (event) => {
    event.preventDefault();

    const data = await fetch(
      "http://localhost:4000/api/user/profilePhotoChange",
      setHeaders(),
      {
        method: "post",

        body: JSON.stringify({}),
      }
    );
    const uploadedImage = await data.json();
    if (uploadedImage) {
      console.log("Successfully uploaded image");
    } else {
      console.log("Error Found");
    }
  };

  return (
    <div className="content">
      <form onSubmit={setImageAction}>
        <input type="file" name="image" />
        <br />
        <br />
        <button type="submit" name="upload">
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProfilePhotoChange;
