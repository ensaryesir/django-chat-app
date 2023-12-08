import React from "react";
import { createRoot } from "react-dom/client";
import Chat from "./containers/chat";
import WebSocketInstance from "./websocket";

class App extends React.Component {
  componentDidMount() {
    WebSocketInstance.connect();
  }

  render() {
    return <Chat />;
  }
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
