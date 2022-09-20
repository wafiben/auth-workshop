import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/actions/AuthActions/authAction";

const styleButton = { margin: "5px" };

function CutomButton({ action, variant }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClick = () => {
    if (action === "logout" || action === "home") {
      dispatch(logOut());
      navigate("/");
    } else {
      /*  if (action === "home") {
    
    } */
      navigate(`/${action}`);
    }
  };
  return (
    <Button
      /* variant="primary" */ variant={variant}
      style={styleButton}
      onClick={handleClick}
    >
      {action}
    </Button>
  );
}

export default CutomButton;
