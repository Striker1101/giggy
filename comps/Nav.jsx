import Image from "next/image";
import React from "react";

function Nav(props) {
  return (
    <div>
      <div className="header">
        <div className="image">
          <Image
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
              margin: "0",
            }}
            src="/icon.svg"
            alt="icon"
            height={150}
            width={55}
          />
          <h1 className="iconText">GIG</h1>
        </div>
        <h3 className="text">
          Land Drilling Rigs
          <br />
          Offshore Rigs & Vessels
          <br />
          Major Rig Components
          <br />
          713-570-6450
        </h3>
      </div>
    </div>
  );
}

export default Nav;
