import React, { useState } from "react";
import LockSc from "./LockSc.jsx";
import HomeSc from "./HomeSc.jsx";
import "./Style.css";
const Phone = () => {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const ChangeSc = () => {
    setInterval(() => {
      setVisible(!visible);
      setVisible2(!visible2);
    }, 500);
  }
  return (
      <div className="phone-container">
          <div className="screen-container"> 
            { (visible2 && (<HomeSc/>)) || (visible && (<LockSc/>)) }
          </div>
            <div style={{display: visible ? "block" : "none"}} className="fingerprint">
              <p>Click to unlock</p>
              <i onPointerDown={ChangeSc} id="fingerprintBtn" className="fa-sharp fa-solid fa-fingerprint"></i>
          </div>
      </div>
  );
}
export default Phone;