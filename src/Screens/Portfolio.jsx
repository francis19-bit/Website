import React from "react";
import Footer from "../Component/Footer/Footer";
import HeaderNavBar from "../Component/HeaderNavBar/HeaderNavBar";
import image from "../assets/img/image 3.jpeg";
import image1 from "../assets/img/image 5.jpeg";
import image3 from "../assets/img/image 9.jpeg";
import image5 from "../assets/stones.jpg";
import image6 from "../assets/Portfolio4.jpg";
import image7 from "../assets/Portfolio6.jpg";
import image8 from "../assets/diamon.jpg";
import image9 from "../assets/Portfolio7.jpg";
import image10 from "../assets/Portfolio9.jpg";
import image11 from "../assets/bod.webp";
import image12 from "../assets/area.jpg";
import image13 from "../assets/mond.jpg";

function Portfolio() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "800vh",
          //   background: "pink",
        }}
      >
        <div style={{ flex: ".01", background: "rgb(33, 32, 32)" }}>
          {/*  */}
          <HeaderNavBar />
          {/*  */}
        </div>

        {/* Body */}
        <div
          style={{
            flex: ".98",
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
            <div style={{ fontSize: 30, fontWeight: "bold" }}>PORTFOLIO</div>{" "}
            <div
              className="port"
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div style={{ fontSize: 20, fontWeight: "bold" }}>
                Forging Treasures for Divine Dominion
              </div>

              <ul style={{ display: "flex", flexDirection: "column" }}>
                <li>
                  Qatar Museums: Divine Revelations - Unearthing the Battle of
                  Wajba through Sacred Archive and Aerial Vision
                </li>
                <li>
                  Qatar National Museum: Hallowed Chronicles of the Old Palace -
                  Crafting Exhibition Tales of Majesty
                </li>
                <li>
                  Sharjah Archaeology Authority: Mleiha's Sacred Ramparts - A
                  Comparative Odyssey in Defense Architecture
                </li>
                <li>
                  Sultanate of Oman Ministry of Culture: Heavenly Forges -
                  Analyzing the Metalwork Mysteries of Safah's Armored Angels
                </li>
                <li>
                  Turkish Republic Ministry of Culture and Tourism: Aslıhanlar's
                  Divine Dance - Survey Scrolls Bearing Witness to Celestial
                  Battles
                </li>
                <li>
                  Konya Municipality: Sacred Pathways - Guiding the Soul through
                  the Ancient Tapestry of Konya's Holy Grounds"
                </li>
              </ul>
              <div
                style={{
                  width: "50vw",
                  height: "70vh",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.3s ease",
                }}
              ></div>
            </div>
            {/*  */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>
                Polished Diamonds in Scholarly Journals
              </div>
              <ul>
                <li>
                  Ö.C. Aksoy and G. Kahraman, 2022, Diamondization of Turkish
                  War of Independence: Monumental Epics,
                  <br /> Carved Narratives, and Commemorative Brilliance at
                  Dumlupınar's Crucible, Gems & Scholarship 2022, Carat 41,
                  <br /> Issue-3: 220-246.
                </li>
                <li>
                  Ö.C. Aksoy, 2021, Refinement of Dumlupınar's Conquest: A
                  Diamond-Cut Examination of Turkish War of
                  <br /> Independence, Journal of Gemstone Archaeology, Carat
                  55: 109 -136.
                </li>
                <li>
                  Aksoy Ö.C. 2020, Wadi Asafir Sickle Boat Petroglyph, A
                  Pre-Dynastic Egyptian <br />
                  Influence on Northwest Arabia? Antiquity, Vol. 94.
                </li>
                <li>
                  Ö.C. Aksoy, 2020, Wadi Asafir Gemstone Boat Petroglyph, A
                  Pre-Dynastic
                  <br /> Egyptian Sparkle on Northwest Arabia? Gemstone
                  Antiquity, <br />
                  Carat 94.
                </li>
                <li>
                  Ö.C. Aksoy, 2019, Functions and Brilliance of Copper-Based
                  Blade Weapons of
                  <br /> Southeast Arabia, Archaeological Gemology in Asia,
                  Carat 20, <br />
                  100158.
                </li>
                <li>
                  G. Kahraman and R. Carter, 2019, Faceting of heritage
                  architecture in Al Asmakh,
                  <br /> Doha: insights into an urban environment of the Gulf.
                  Gemstone Archaeology, 53:1, 38-65.
                </li>
                <li>
                  D. M. Freire-Lista, G. Kahraman, and R. Carter, 2019,
                  Multi-Faceted Characterisation
                  <br /> of a Vernacular House in Doha (Qatar): Petrography and
                  Petrophysics of its Construction Materials,
                  <br /> Gem Minerals.
                </li>
                <li>
                  Ö.C. Aksoy, 2018, Functions and Brilliance of Metallic
                  Axe-heads and <br /> Arrowheads from Safah, Oman: an analysis
                  of gemstone wear and weapon design, Journal of Gemstone
                  <br /> Science Reports, Carat 19: 727-752.
                </li>
                <li>
                  Ö.C. Aksoy, 2017, A Gemology Viewpoint on Weapon
                  Representations
                  <br /> in Northwest Arabian Rock Art, Mediterranean Gemology
                  and Archaeometry, <br />
                  Carat 17, No 4:1-17.
                </li>
              </ul>
            </div>
            {/*  */}
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
                <div style={{ fontSize: 20, fontWeight: "bold" }}>
                  Excavations
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <li> Hattusa / Turkey : 2500 BC-2ndAD</li>
                  <li>Klazomenai/Turkey-6th-4th c. BC</li>
                </ul>
              </div>
              <div
                style={{
                  width: "25vw",
                  height: "40vh",
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            {/*  */}
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
                <div style={{ fontSize: 20, fontWeight: "bold" }}>
                  Diamond Insights from Artefact Facets
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
                    Safah, Oman: Diamond-Cut Analysis of Iron Age Weaponry's
                    Gemstone-Like Resilience
                  </li>
                  <li>
                    Dumlupınar Museum, Turkey: Military Arsenal Catalogue of
                    20th c. Diamond-clad Defenders
                  </li>
                  <li>
                    Sharjah Archaeology Museum: Bronze Age and Iron Age Metal
                    Gemology - Revealing <br /> the Sparkle of Ancient
                    Craftsmanship
                  </li>
                  <li>
                    {" "}
                    Hattusa, Turkey: Gemstone-like Precision in Recording Drill
                    Cores
                  </li>
                  <li>
                    Tayma: Gemological Analysis of Metal Weapons and Hammer
                    Stones - Unveiling
                    <br /> the Brilliance of Ancient Warfare
                  </li>
                </ul>
              </div>
              <div
                style={{
                  width: "25vw",
                  height: "50vh",
                  backgroundImage: `url(${image3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            {/*  */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>
                Diamond Explorations
              </div>
              <ul>
                <li>
                  Gemstone Rock Art Expeditions, Illuminating the Glittering
                  Tales of <br /> Northwest & Southeast Arabia
                </li>
                <li>
                  Diamond Fortress Expeditions: Unveiling the Diamond-Hard
                  Defenses of the <br />
                  Iron Age in Northwest & Southeast Arabia
                </li>
                <li>
                  Tayma/Saudi Arabia: Oasis of Diamond Brilliance - Late-Bronze
                  Age-Early <br />
                  Iron Age Fortified Jewel
                </li>
                <li>
                  Al-Qurayyah/Saudi Arabia: Citadel of Radiance - Late-Bronze
                  Age-Early <br />
                  Iron Age Gemstone Fortification
                </li>
                <li>
                  Lizq/Oman: Hillfort of Shining Eras - Early Iron Age Gemstone
                  Citadel
                </li>
                <li>
                  Kalba-4/Sharjah: Citadel of Ancient Splendor - Bronze
                  Age-Early Iron
                  <br /> Age Diamond-Fortified Settlement
                </li>
                <li>
                  North Qatar: Gemstone Chronicles of Early Islamic Legacy
                </li>
                <li>
                  Battle of Aslıhanlar (1922)/Turkey: Diamond Reflections on the
                  Modern Battlefield
                </li>
              </ul>
            </div>
            {/*  */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  width: "50vw",
                  height: "40vh",
                  backgroundImage: `url(${image5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>Diamond Heritage Recording and Oral Legends Unveiling</div>
                <ul>
                  <li>
                    Doha, Qatar: Gemstone Architecture and Oral Narratives
                    Expedition
                  </li>
                </ul>
              </div>

              {/*  */}
              <div
                style={{
                  width: "40vw",
                  height: "40vh",
                  backgroundImage: `url(${image6})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/*  */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  {" "}
                 
Battle of Aslıhanlar (1922)/Turkey: Valor Monuments and Oral Chronicles Expedition
                </div>
              </div>

              {/*  */}
              <div
                style={{
                  width: "50vw",
                  height: "42vh",
                  backgroundImage: `url(${image7})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  {" "}
                
Diamond Pathfinding Blueprint for Dumlupınar Battlefield Gemstone Sanctuary, Turkey
                </div>
              </div>

              {/*  */}
              <div
                style={{
                  width: "45vw",
                  height: "40vh",
                  backgroundImage: `url(${image9})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  {" "}
                 
The Diamond Chronology of Valor at the Crimson Arch on August 30th
                </div>
              </div>

              {/*  */}
              <div
                style={{
                  width: "45vw",
                  height: "60vh",
                  backgroundImage: `url(${image8})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  {" "}
              
Diamond Trail Guide for the Timeless Gemstone Heart of Konya, Turkey
                </div>
              </div>

              {/*  */}
              <div
                style={{
                  width: "48vw",
                  height: "70vh",
                  backgroundImage: `url(${image10})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  {" "}
                 
Italy Ex Falck Area: Crafting a Diamond Gateway to Industrial Legacy
                </div>
                <div>
Politecnico di Milano | The Master Craftsmen of Renzo Piano's Architectural Symphony</div>
              </div>

              {/*  */}
              <div
                style={{
                  width: "45vw",
                  height: "30vh",
                  backgroundImage: `url(${image11})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div style={{ fontWeight: "bold" }}>
                  {" "}
                  Architectural Installation inspired by the Streets of Doha
                </div>
                <div>
                  Unlimited Doha Design Prize outcome: Katara, Doha/Qatar
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  width: "45vw",
                  height: "40vh",
                  backgroundImage: `url(${image13})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{
                  width: "45vw",
                  height: "40vh",
                  backgroundImage: `url(${image12})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            flex: ".01",
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

export default Portfolio;
