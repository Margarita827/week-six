import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brighton" />
      </div>
      <footer>
        This project has been coded by{" "}
        <a
          href="https://github.com/Margarita827"
          target="_blank"
          rel="noopener noreferrer"
        >
          Margarita Ibanez
        </a>
        and is{" "}
        <a
          href="https://github.com/Margarita827/week-six"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
