import React from "react";
import Footer from "../Component/Footer/Footer";
import HeaderNavBar from "../Component/HeaderNavBar/HeaderNavBar";
import { Link } from "react-router-dom";
import image1 from "../assets/img/image 14.jpg";
import image2 from "../assets/img/image 10.jpeg";
import image3 from "../assets/img/image 10.jpeg";

function People() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "190vh",
          // background: "pink",
        }}
      >
        <div style={{ flex: ".05", background: "rgb(33, 32, 32)" }}>
          {/*  */}
          <HeaderNavBar />
          {/*  */}
        </div>

        {/* Body */}
        <div
          style={{
            flex: ".9",
            // background: "red",
            display: "grid",
            placeContent: "center",
          }}
        >
          {/* ========== */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
              gap: 40,
            }}
          >
            <div style={{ fontSize: 45, fontWeight: "bolder" }}>People</div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 40,
              }}
            >
              <div
                style={{
                  width: "40vw",
                  height: "45vh",
                  background: "red",
                    backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease",
                  backgroundPosition: "center",
                }}
              ></div>
              <Link
                to="/ÖMER"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                }}
              >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  textDecoration: "underline",
                }}
              >
                ÖMER CAN AKSOY, PhD
              </div>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 40,
              }}
            >
              <div
                style={{
                  width: "40vw",
                  height: "45vh",
                  background: "red",
                    backgroundImage: `url(${image2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease",
                  backgroundPosition: "center",
                }}
              ></div>
               <Link
                to="/GİZEM"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                }}
              >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  textDecoration: "underline",
                }}
              >
                GİZEM KAHRAMAN AKSOY, PhD
              </div>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 40,
              }}
            >
              <div
                style={{
                  width: "40vw",
                  height: "45vh",
                  background: "red",
                    backgroundImage: `url(${image3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease",
                  backgroundPosition: "center",
                }}
              ></div>
               <Link
                to="/BURHAN"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                }}
              >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  textDecoration: "underline",
                }}
              >
               BURHAN ŞOHOĞLU, MA
              </div>
              </Link>
            </div>
          </div>
          {/* =============== */}
        </div>

        {/* Footer */}
        <div
          style={{
            flex: ".05",
            background: "rgb(33, 32, 32)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default People;
