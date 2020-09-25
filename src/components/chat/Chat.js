import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar>A</Avatar>
        <div className="chat__headerInfo">
          <h3>Arun </h3>
          <p>Last Seen at ..</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          message
          <span className="chat__timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat__message chat__receiver">
          message
          <span className="chat__timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Chat;
