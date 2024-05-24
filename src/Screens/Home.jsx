import React from "react";
import ChatCard from "../Component/Card/ChatCard";
import { CustomTextField } from "../Component/CustomTextField/CustomTextField";
import Avatar from "@mui/material/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatBoard from "../Component/ChatBoard/ChatBoard";
import image from "../assets/Image/frankoIcon.png";

function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          padding: 15,
          // padding: "1vw 2vw",
          background: "wheat",
        }}
      >
        <div
          style={{
            flex: 0.25,
            // background: "red",
            display: "flex",
            flexDirection: "column",
            padding: "1vw 0vw",
          }}
        >
          <div
            style={{
              flex: 0.1,
              // background: "yellow",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <div style={{ fontSize: 25, fontWeight: "bolder" }}>Chats</div>
              <CustomTextField width="19vw" placeholder="search" />
            </div>
          </div>
          <div
            style={{
              flex: 0.9,
              background: "rgb(226, 202, 158)",
              padding: 10,
              overflowY: "scroll",
              borderRadius: 10,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ChatCard />
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 0.4,
            // background: "pink",
            display: "flex",
            flexDirection: "column",
            padding: "1vw 1vw",
          }}
        >
          <div style={{ flex: 0.1 }}>
            <div>
              <img width="10%" src={image} />
            </div>
          </div>

          {/* Chat */}
          <div
            style={{
              flex: 0.9,
              background: "rgb(165, 143, 103)",
              borderRadius: 30,
            }}
          >
            <ChatBoard />
          </div>
        </div>

        {/* no content yet */}
        <div
          style={{
            flex: 0.35,
            background: "rgb(226, 202, 158)",
            borderRadius: 30,
          }}
        ></div>
      </div>
    </>
  );
}

export default Home;
