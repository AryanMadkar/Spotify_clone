import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayerContext from "./context/PlayerContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PlayerContext>
      <App />
    </PlayerContext>
  </BrowserRouter>
);