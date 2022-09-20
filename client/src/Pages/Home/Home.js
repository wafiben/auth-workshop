import React, { useState, useEffect } from "react";
import CardComponent from "../../components/Card/CardComponent";
import useFetch from "../../hooks/useFetch";

function Home() {
  const data = useFetch("http://localhost:9000/api");
  console.log(data);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {data
        ? data.artciles.map((elt) => (
            <CardComponent elt={elt} key={elt._id} operation={"getArticle"} />
          ))
        : "loading"}
    </div>
  );
}

export default Home;
