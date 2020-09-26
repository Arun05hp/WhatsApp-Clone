import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import baseUrl from "./baseUrl";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    baseUrl
      .get("api/messages/sync")
      .then((response) => setMessages(response.data));
  }, []);

  useEffect(() => {
    const pusher = new Pusher("536f9ca02a9b0e884c09", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__container">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
