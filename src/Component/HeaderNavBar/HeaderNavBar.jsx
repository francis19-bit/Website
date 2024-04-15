import React from "react";
import BasicMenu from "../Menu/BasicMenu";
import { Link } from "react-router-dom";

function HeaderNavBar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1% 10%",
          color: "white",
          background: "rgb(33, 32, 32)",
          position: "fixed",
        }}
        className="length"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 25 }}>Green Lands Geo</div>
          <div> mining | archaeology </div>
        </div>
        
        <ul
          style={{
            display: "flex",
            gap: 30,
            alignItems: "center",
            listStyle: "none",
            fontSize: 13,
          }}
        >
          <Link
            to="/Aboutus"
            style={{
              textDecoration: "none",
              color: "rgb(202, 195, 182)",
              fontSize: "14px",
            }}
          >
            {" "}
            <li>ABOUT US</li>
          </Link>

          <Link
            to="/OurApproach"
            style={{
              textDecoration: "none",
              color: "rgb(202, 195, 182)",
              fontSize: "14px",
            }}
          >
            <li>OUR APPROACH</li>
          </Link>
          <Link
            to="/People"
            style={{
              textDecoration: "none",
              color: "rgb(202, 195, 182)",
              fontSize: "14px",
            }}
          >
            <li>
              <BasicMenu />
            </li>
          </Link>

          <Link
            to="/Services"
            style={{
              textDecoration: "none",
              color: "rgb(202, 195, 182)",
              fontSize: "14px",
            }}
          >
            <li>SERVICES</li>
          </Link>

          <Link
            to="/Portfolio"
            style={{
              textDecoration: "none",
              color: "rgb(202, 195, 182)",
              fontSize: "14px",
            }}
          >
            <li>PORTFOLIO</li>
          </Link>
          <Link
            to="/ContactToes"
            style={{
              textDecoration: "none",
              color: "rgb(202, 195, 182)",
              fontSize: "14px",
            }}
          >
            <li>CONTACT TEOS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default HeaderNavBar;
