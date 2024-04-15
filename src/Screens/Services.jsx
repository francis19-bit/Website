import React from "react";
import Footer from "../Component/Footer/Footer";
import HeaderNavBar from "../Component/HeaderNavBar/HeaderNavBar";
import image from "../assets/img/image 11.jpg";
import image2 from "../assets/img/image 13.jpg";
import image3 from "../assets/Service3.jpg";
import image4 from "../assets/filed.jpg";
// filed.jpg

function Services() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "290vh",
        //   background: "pink",
        }}
      >
        <div style={{ flex: ".03", background: "rgb(33, 32, 32)" }}>
          {/*  */}
          <HeaderNavBar />
          {/*  */}
        </div>

        {/* Body */}
        <div
          style={{
            flex: ".94",
            // background: "red",
            display: "grid",
            placeContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "space-between",
              alignItems: "center",
              gap: 30,
            }}
          >
            <div style={{ fontSize: 30, fontWeight: "bold" }}>SERVICES</div>`{" "}
            <div className="leng">
              {/* first pic */}
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
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <div style={{ fontSize: 24, fontWeight: "bold" }}>
                   
Diamond Research:
                  </div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <li>
                      {" "}
                      Faceting Structured Interviews to Forge Oral Gemstone Legacies <br />{" "}
                      history databases
                    </li>
                    <li> Diamond Exploration of Archives and Inventories</li>
                    <li>Crafting Publication Gemstones of Knowledge</li>
                    <li> Gemstone Exhibition Texts and Content Development</li>
                    <li>
                    Faceted Reviews and Inputs into Project Documents: Concepts, Masterplans, <br/> Implementation Strategies, and Guidelines
                    </li>
                  </ul>
                </div>
                <div
                  style={{ width: "35vw", height: "60vh",   backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease", }}
                >
                </div>
              </div>
              `{/* second pic */}
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
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <div style={{ fontSize: 24, fontWeight: "bold" }}>
                 
Diamond Fieldwork:
                  </div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <li>Gemstone Cartography and Historic Building Surveys</li>
                    <li> Diamond Excavations: Unearthing Ancient Treasures</li>
                    <li>Diamond Processing of Artefacts</li>
                  </ul>
                </div>
                <div
                  style={{ width: "35vw", height: "60vh", backgroundImage: `url(${image4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",}}
                >
                </div>
              </div>
              {/* third pic */}
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
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <div style={{ fontSize: 24, fontWeight: "bold" }}>
                  
Diamond Heritage Management:
                  </div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <li>
                    Illuminating the Gemstone Significance of Urban and Archaeological Precincts
                    </li>
                    <li>
                      {" "}
                      Crafting Gemstone Strategies and Statements of Heritage Significance
                    </li>
                    <li>
                    Diamond Guidance on Regeneration Proposals: Accessibility, Wayfinding, Public Realm, Public Art
                    </li>
                    <li>
                      {" "}
                      Consultation for Project Managers: Faceting the Presentation <br/> and Interpretation of Architectural, Archaeological, and Urban Heritage
                    </li>
                  </ul>
                </div>
                <div
                  style={{ width: "40vw", height: "60vh", backgroundImage: `url(${image2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease", }}
                >
                </div>
              </div>
              {/* fourth pic */}
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
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <div style={{ fontSize: 24, fontWeight: "bold" }}>
Diamond Design:</div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <li>
                    Gemstone Consultation, Creation, and Implementation of Displays
                    </li>
                    <li> Conceptual Gemstone Design and Consultation for Museums</li>
                    <li>
                    Crafting Gemstone Wayfinding Strategies for Archaeological Sites and Museums
                    </li>
                    <li>
                      {" "}
                      Gemstone Graphic Design of Publications and Exhibition Contents
                    </li>
                  </ul>
                </div>
                <div
                  style={{ width: "35vw", height: "60vh",  backgroundImage: `url(${image3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease", }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            flex: ".03",
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

export default Services;
