import React from 'react'
import Footer from '../Component/Footer/Footer'
import HeaderNavBar from '../Component/HeaderNavBar/HeaderNavBar'
import image4 from "../assets/Logo.jpg";

function ContactToes() {
  return (
    <div>
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
              gap: 30,
            }}
          >
            <div style={{ fontSize: 25, fontWeight:"bold" }}>CONTACT TEOS</div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 40,
              }}
            >
              <div
                style={{ width: "24vw", height: "40vh",  backgroundImage: `url(${image4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center", }}
              >
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 15 }}
              >
                <div style={{ fontSize: 18, fontWeight:"300" }}>
                archaeology | heritage | architecture
                </div>
                <div style={{ fontSize: 18, fontWeight:"300" }}>
                teosheritage@gmail.com
                </div>
                <div style={{ fontSize: 18, fontWeight:"300" }}>
               <ul style={{textAlign:"center", listStyle:"none"}}>
                <li>Sasalı Merkez Mah. 1. Sk. No:80</li>
                <li>Çiğli / Izmir</li>
                <li>Turkey</li>
               </ul>
                </div>
              
              </div>
            </div>
          </div>

          {/*  */}
          <div>
          
          </div>
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
  )
}

export default ContactToes
