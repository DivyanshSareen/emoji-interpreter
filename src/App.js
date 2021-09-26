import { useState } from "react";
import "./styles.css";

// emoji dictionary
var dict = {
  "😀": "Grinning",
  "😪": "Sleepy",
  "👽": "Alien",
  "👌": "OK",
  "👀": "Eyes",
  "👑": "Crown",
  "🧛": "Vampire"
};

// list of keys from dict object
var emojis = Object.keys(dict);

export default function App() {
  // state to show interpretation
  const [output, setOutput] = useState("....");

  // displays emoji keys
  function handleList() {
    return emojis.map((e) => (
      <span
        // changes output state if the emoji is clicked
        onClick={() => setOutput(dict[e])}
        key={e}
        style={{ fontSize: "2em", padding: "0.25em" }}
      >
        {e}
      </span>
    ));
  }

  // handling output state based on change in input value
  function handleChange(e) {
    if (e.target.value in dict) setOutput(dict[e.target.value]);
    else setOutput("....");
  }

  return (
    <div className="App" style={{ padding: "5rem" }}>
      <h2>Emoji Interpreter</h2>
      <input
        onChange={handleChange}
        placeholder={"type your emoji or selet one from the list"}
        style={{ width: "50%", height: "2rem" }}
      />
      <p>
        translation: <span style={{ color: "yellow" }}>{output}</span>
      </p>
      <h3>Available Emojis</h3>
      {handleList()}
    </div>
  );
}
