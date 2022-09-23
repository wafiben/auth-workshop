import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormInfoArtcile() {
  /*  const token = localStorage.getItem("token"); */
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [nameOfArticle, setNameOfArticle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChangeFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameOfArticle && selectedFile) {
      console.log("ssssssssss", nameOfArticle);
      console.log("ddddddddddd", selectedFile);

      console.log(true);
      let formData = new FormData();
      formData.append("nameOfArticle", nameOfArticle);
      formData.append("selectedFile", selectedFile);
      setTimeout(() => {
        axios
          .post("http://localhost:9000/api", formData, config)
          .then((res) => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }, 3000);
    }
  };
  return (
    <>
      {show && msg}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <input
            type="text"
            onChange={(e) => setNameOfArticle(e.target.value)}
          />
        </div>
        <div>
          <input type="file" onChange={handleChangeFile} accept="image/*" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormInfoArtcile;
