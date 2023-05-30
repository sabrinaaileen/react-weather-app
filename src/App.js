import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
      </div>
      <footer>
        <p>
          {" "}
          <a
            href="https://github.com/sabrinaaileen/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source Code
          </a>{" "}
          from Sabrina Aileen Hodapp
        </p>
      </footer>
    </div>
  );
}
