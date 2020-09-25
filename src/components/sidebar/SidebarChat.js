import React from "react";

import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar>A</Avatar>
      <div className="sidebarChat__info">
        <h2>A</h2>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default SidebarChat;
