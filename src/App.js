import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
