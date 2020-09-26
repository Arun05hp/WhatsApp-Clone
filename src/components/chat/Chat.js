import React, { useState } from "react";

import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import baseUrl from "../../baseUrl";
import "./Chat.css";
const Chat = ({ messages }) => {
  const [sendMessage, setsendMessage] = useState("");

  const sendMsg = () => {
    baseUrl.post("/api/message/new", {
      message: sendMessage,
      name: "Atul",
      timestamp: "Just now",
      received: false,
    });
    setsendMessage("");
  };

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
        {messages.map((message, index) => (
          <p
            key={message._id + index}
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            {message.message}
            <span className="chat__timestamp">
              {new Date().toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form>
          <input
            type="text"
            onChange={({ target }) => setsendMessage(target.value)}
            value={sendMessage}
            placeholder="Type a message"
          />
          {sendMessage.trim() ? (
            <IconButton onClick={sendMsg}>
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
