import React from 'react'
import Footer from '../Component/Footer/Footer'
import HeaderNavBar from '../Component/HeaderNavBar/HeaderNavBar'
import image1 from "../assets/img/image 10.jpeg";

function Gizem() {
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
            <div style={{fontSize:25, fontWeight:"bold"}}>GİZEM KAHRAMAN AKSOY</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
              <div
                style={{ width: "25vw", height: "30vh",     backgroundImage: `url(${image1})`,
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
                  Deputy CEO – Architect <br /> GİZEM KAHRAMAN AKSOY, PhD
                  </div>
                  <div>
                  Gizem completed her doctoral studies at the University of Exeter’s Institute of Arab and Islamic Studies—holding a Gulf Studies<br/>  PhD Scholarship—, where she is currently an affiliated post-doctoral re<br/>searcher at the Centre for Islamic Archaeology. She holds an MSc in Architectural Engineering from <br/> Politecnico di Milano and a B.Arch in Architecture from  Izmir University of Economics. Since 2005, she <br/>has been involved in a number of multidisciplinary workshops and projects in Turkey, Italy and Qatar.<br/> She has experience in a number of universities and architectural studios, where she took positions as a<br/> researcher, lecturer and an architect.
                  </div>

                  {/*  */}
                  <div>
                  Awards
                  </div>
                  <ul>
                    <li>Gulf Studies PhD Studentship, University of Exeter, 2017-2020</li>
                    <li>Unlimited Doha Design Prize 2016, British Council – Qatar Museums</li>
                    <li>Univerlecco Scholarship for MSc Studies at Politecnico di Milano, 2010-2012</li>
                    <li>First Ranked Graduate of the Architecture Department of the Izmir University of Economics, 2009</li>
                    <li>Education Scholarship at the Izmir University of Economics, 2005-2009</li>
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

export default Gizem
