import React from "react";
import Avatar from "@mui/material/Avatar";
import { Card } from "@mui/material";

function ChatCard() {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          height: "10vh",
          //   background: "peru",
          borderRadius: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Avater */}
        <div
          style={{
            flex: 0.3,
            // background: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: "60%", height: "7vh" }} />
        </div>

        {/* Name */}
        <div
          style={{
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 0.5,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div>Name</div>
          </div>
          <div
            style={{
              flex: 0.5,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <small>I have news about..</small>
          </div>
        </div>

        {/* Time */}
        <div
          style={{
            flex: 0.2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <small>20:30 am</small>
        </div>
      </Card>
    </div>
  );
}

export default ChatCard;
