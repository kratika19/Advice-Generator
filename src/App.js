import './App.css';
import React, { useState } from 'react'
import Axios from "axios";

function App() {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setadvice] = useState("Press the button below to get advice!!");
  const getAdvice = async () => {
    var result = await Axios.get(url);
    console.log(result['data']['slip']['advice']);
    setadvice(result['data']['slip']['advice']);
  }
  return (
    <div className="app">
      <div className="card">
        <h1>{advice}</h1>
        <button type="submit" onClick={getAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
