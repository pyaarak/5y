import React, { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function FixedFooter() {
  const [View, setView] = useState(false);
  const handleChange = () => {
    // console.log(window.pageYOffset, "lasdlsakdsald");
    if (window.pageYOffset > 300) {
      setView(true);
    } else {
      setView(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  return (
    <div
      className="Fixed"
      style={{ position: "fixed", bottom: "15px", padding: "10px" }}
    >
      {View && (
        <div
          className="Fixed_content"
          style={{
            padding: "5px",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF3160",
            borderRadius: "50%",
          }}
          onClick={(e) => {
            window.scrollTo(0, 0);
          }}
        >
          <ArrowCircleUpIcon
            style={{ color: "#EAC701", width: "30px", height: "30px" }}
          ></ArrowCircleUpIcon>
        </div>
      )}
    </div>
  );
}
