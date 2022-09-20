import React from "react";
import useFetch from "../../hooks/useFetch";
import CardComponent from "../../components/Card/CardComponent";

function Admin() {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };

  const data = useFetch("http://localhost:9000/api/admin", config);


  /*  console.log(data.users); */

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
    {!data
        ? "loading"
        : data.users.map((elt) => (
            <CardComponent key={elt._id} elt={elt} operation={"getUsers"} />
          ))}  
      <h1>hello</h1>
    </div>
  );
}

export default Admin;
