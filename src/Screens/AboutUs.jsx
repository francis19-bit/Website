import React from "react";
import HeaderNavBar from "../Component/HeaderNavBar/HeaderNavBar";
import Footer from "../Component/Footer/Footer";
import image from "../assets/img/image 10.jpeg";

function AboutUs() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          // background: "pink",
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
            placeContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
              gap: 40,
            }}
          >
            <div style={{fontSize:30,fontWeight:"bold"}}>ABOUT US</div>
            
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
                  width: "25vw",
                  height: "55vh",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease",
                  backgroundPosition: "center",
                }}
              >
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 15 }}
              >
                <div style={{ fontSize: 20, fontWeight: "200" }}>
                Teos, the alchemists of antiquity, weaving the threads of time into radiant gems.
                </div>
                <div style={{ fontSize: 20, fontWeight: "300" }}>
                  {/* We provide archaeological and architectural advice and
                  guidance, along <br /> with a wide range of heritage
                  assessment work and site surveys. */}
                  Masters of the ancient arts, we delve into the depths of Western Asia's legacy, crafting diamonds of <br /> wisdom from the sands of heritage. 
                </div>
                
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 5 }}
                >
                  <div style={{ fontSize: 20, fontWeight: "200" }}> Our expertise shimmers in:</div>
                  <ul style={{ fontSize: 20, fontWeight: "200" }}>
                    <li> Unearthing the treasures of archaeological fieldwork</li>
                    <li> Illuminating the tapestry of heritage sites through meticulous recording</li>
                    <li>Forging manuscripts of knowledge in preparation of reports and publications</li>
                    <li> Guiding the guardians of history with our heritage management strategies"</li>
                  </ul>
                </div>
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
    </>
  );
}

export default AboutUs;
