import React from "react";
import Avatar from "@mui/material/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { CustomTextField } from "../CustomTextField/CustomTextField";

function ChatBoard() {
  return (
    <div
      style={{
        // borderRadius: 30,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          flex: 0.1,
          // background: "pink",
          borderRadius: 30,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 0.2,
            // background: "blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: "50%", height: "7vh" }} />
        </div>
        <div
          style={{
            flex: 0.6,
            // background: "red",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.2em" }}>
            Conversation with <span style={{ color: "green" }}>Henry</span>{" "}
          </div>
        </div>
        <div style={{ flex: 0.2, display: "flex", alignItems: "center" }}>
          <div>
            <IconButton>
              <CalendarMonthIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 0.9,

          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 0.9, background: "whitesmoke" }}></div>
        <div
          style={{
            flex: 0.1,
            // background: "brown",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 30,
              paddingLeft: "5%",
            }}
          >
            <CustomTextField placeholder="Write text" width="30vw" />
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBoard;
