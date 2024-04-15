import React from "react";
import Footer from "../Component/Footer/Footer";
import HeaderNavBar from "../Component/HeaderNavBar/HeaderNavBar";

function OurApproach() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        //   background: "pink",
        }}
      >
        <div style={{ flex: ".1", background: "rgb(33, 32, 32)" }}>
          {/*  */}
          <HeaderNavBar />
          {/*  */}
        </div>

        {/* Body */}
        <div
          style={{
            flex: ".8",
            // background: "red",
            display: "grid",
            // placeContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
            }}
          >
            <div style={{ fontSize: 30 , fontWeight:"bold"}}>OUR APPROACH</div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <div style={{ fontSize: 20, fontWeight:"bold" }}>Responsive</div>
              <div style={{ fontSize: 17 }}>
                We aim for optimal outcomes for all parties including the
                client, the local communities and the audi <br /> ences within
                the financial scope and timetable of each project.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <div style={{ fontSize: 20, fontWeight:"bold" }}>Knowledge-based Solutions</div>
              <div style={{ fontSize: 17 }}>
              We do not believe in groundless solutions. Our work is always based on comprehensive research co-<br/> vering a wide range of sources and methodologies.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <div style={{ fontSize: 20, fontWeight:"bold" }}>Multi-disciplinary</div>
              <div style={{ fontSize: 17 }}>
                We delight in approaching projects from various angles. On the
                basis of our experience, we have the <br /> capability to bring
                in the most suitable experts for each project.
              </div>
            </div>
          </div>

          {/*  */}
          <div></div>
        </div>

        {/* Footer */}
        <div
          style={{
            flex: ".1",
            background: "rgb(33, 32, 32)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OurApproach;
