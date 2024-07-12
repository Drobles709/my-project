import React, { useState } from 'react';
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [result, setResult] = useState("");

  const handleInfo = (event) => {
    setUser(event.target.value.toLowerCase()); // Convert input to lowercase to handle case insensitivity
  };

  const play = () => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = "";
    if (user === computerChoice) {
      resultMessage = "It's a tie!";
    } else if (
      (user === "rock" && computerChoice === "scissors") ||
      (user === "scissors" && computerChoice === "paper") ||
      (user === "paper" && computerChoice === "rock")
    ) {
      resultMessage = "You won!";
    } else {
      resultMessage = `You lose! Computer chose ${computerChoice}`;
    }

    setResult(resultMessage);
  };

  return (
    <div className="App">
      <div className="box">
        <h1>Pick rock, paper, or scissors</h1>
        <input 
          onChange={handleInfo}
          placeholder="Enter rock, paper, or scissors"
        />
        <button className="button" onClick={play}>Play</button>
        <h2>{result}</h2>
        <h2>Instagram: DemetriRobles</h2>
      </div>
    </div>
  );
}

export default App;

