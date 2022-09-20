import React, { useState } from "react";
import FormInfo from "../../components/FormInfo/FormInfo";
import "./auth.css";

function AuthComponent() {
  const [commandType, setCommandType] = useState("signin");
  const handleClickType = () => {
    if (commandType === "signin") {
      setCommandType("register");
    } else {
      setCommandType("signin");
    }
  };
  return (
    <div>
      <FormInfo commandType={commandType} />
      <p className="para" onClick={handleClickType}>
        {commandType === "signin" ? "do not" : ""} have an account{" "}
        <u> {commandType === "signin" ? "register" : "signin"}</u>
      </p>
    </div>
  );
}

export default AuthComponent;
