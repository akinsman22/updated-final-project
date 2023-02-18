import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { PitchProvider } from "./contexts/PitchProvider";
import { UserProvider } from "./contexts/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PitchProvider>
        <App />
      </PitchProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
