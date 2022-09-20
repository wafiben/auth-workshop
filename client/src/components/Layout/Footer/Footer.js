import React from "react";
import CutomButton from "../../Button/Button";

const styleFooter = { position: "fixed", bottom: 0 };

function Footer() {
  return (
    <div style={styleFooter}>
      <CutomButton action="contact-us" />
    </div>
  );
}

export default Footer;
