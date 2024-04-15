import React from 'react'
import HeaderNavBar from '../Component/HeaderNavBar/HeaderNavBar'
import Footer from '../Component/Footer/Footer'
import image1 from "../assets/img/image 10.jpeg";

function Bur() {
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
        <div style={{ flex: ".08",  background: "rgb(33, 32, 32)", }}>
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
            <div style={{fontSize:25, fontWeight:"bold"}}>BURHAN ŞOHOĞLU</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
              <div
                style={{ width: "25vw", height: "30vh", backgroundImage: `url(${image1})`,
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
                  Associate – Graphic Designer <br /> BURHAN ŞOHOĞLU, MA
                  </div>
                  <div>
                  Burhan is a graphic designer and a lecturer at the University of Ankara Hacı Bayram Veli. He holds a BA<br />  and an MA from Dokuz Eylül University’s Department of Fine Arts in Turkey. He worked as a lecturer,<br />  game designer and graphic designer in a number of universities and companies. Burhan has been in<br /> volved in a number of multi-disciplinary projects, numerous exhibitions and is highly experienced in<br />  designing posters, logos, fonts, book-covers, souvenirs and maps. 
                  </div>

                  {/*  */}
                  <div>
                  Awards
                  </div>
                  <ul>
                    <li>Invited Participant of the 15th JAZZ IN RUINS 2019: Jazz is a man’s thing International Poster Exhibition, Gliwice, Polonya</li>
                    <li>Invited Participant of the Golden Bee Global Biennale of Graphic Design 2019, Novosibirsk, Russia</li>
                    <li>Invited Participant of the City of Bardejov International Poster Exhibition, Bardejov, Slovakia, 2019</li>
                    <li>KTO Karatay University Logo Design Competition, 2016, 2nd place</li>
                    <li>İzmir Özel Türk Koleji Anaokulları Logo Design Competition, 2006, 1st place</li>
                    <li>Denizli Municipality, Solid Waste Collection Centre Logo Design Competition, 2003, 2nd place</li>
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
  )
}

export default Bur
