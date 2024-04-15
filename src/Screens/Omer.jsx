import React from "react";
import Footer from "../Component/Footer/Footer";
import HeaderNavBar from "../Component/HeaderNavBar/HeaderNavBar";
import image1 from "../assets/img/image 14.jpg";

function Omer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "120vh",
          // background: "pink",
        }}
      >
        <div style={{ flex: ".08", background: "peru" }}>
          {/*  */}
          <HeaderNavBar />
          {/*  */}
        </div>

        {/* Body */}
        <div
          style={{
            flex: ".84",
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
              gap: 60,
            }}
          >
            <div style={{fontSize:25, fontWeight:"bold"}}>ÖMER CAN AKSOY</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
              <div
                style={{ width: "25vw", height: "30vh",   backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center", }}
              >
                img
              </div>

              {/*  */}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <div>
                    Chief Executing Officer – Archaeologist <br /> ÖMER CAN
                    AKSOY, PhD
                  </div>
                  <div>
                    {" "}
                    Can holds a BA, an MA and a PhD from University College
                    London, Institute of Archaeology. His research
                    <br /> interests include Arabian archaeology, historical
                    buildings, rock art of the Arabian Peninsula, commu-
                    <br />
                    nity archaeology, modern conflict archaeology and
                    metalwork-wear analysis. Since 2005, he has been
                    <br /> conducting fieldwork and artefact studies in Saudi
                    Arabia, the UAE, Qatar, Turkey, UK, and Oman.
                  </div>

                  {/*  */}
                  <div>
                  Awards
                  </div>
                  <ul>
                    <li>Unlimited Doha Design Prize 2016, British Council – Qatar Museums</li>
                    <li>European Association of Archaeologists, 2014 Student Award for the Battle of Aslıhanlar Visual <br/> Communication Design</li>
                    <li>Qatar Foundation – UCL Qatar PhD Scholarship</li>
                    <li>US Army Ret. Lt. Col. Cornelius W. Barton, Military History Grant</li>
                    <li>UCL Seton Lloyd Prize, for research in Western Asiatic Archaeology</li>
                  </ul>
              </div>
            </div>
          </div>

          {/*  */}
          <div></div>
        </div>

        {/* Footer */}
        <div
          style={{
            flex: ".08",
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

export default Omer;
