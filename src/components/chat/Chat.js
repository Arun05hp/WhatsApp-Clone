import React, { useState } from "react";

import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import "./Chat.css";
const Chat = () => {
  const [message, setMessage] = useState("s");
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
            {new Date().toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
        <p className="chat__message chat__receiver">
          message
          <span className="chat__timestamp">
            {new Date().toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form>
          <input type="text" placeholder="Type a message" />
          {message.trim() ? (
            <IconButton onClick={() => console.log("jii")}>
              <SendIcon />
            </IconButton>
          ) : (
            <IconButton>
              <MicIcon />
            </IconButton>
          )}
        </form>
      </div>
    </div>
  );
};

export default Chat;
