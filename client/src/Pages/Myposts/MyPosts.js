import React from "react";
import useFetch from "../../hooks/useFetch";
import CardComponent from "../../components/Card/CardComponent";

function MyPosts() {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  const data = useFetch("http://localhost:9000/api/my-posts", config);
  console.log(data);
  return (
    <div style={{display: "flex"}}>
      {data
        ? data.myArtciles.map((elt) => (
            <CardComponent operation={"getArticle"} key={elt._id} elt={elt} />
          ))
        : "loading"}
    </div>
  );
}

export default MyPosts;
