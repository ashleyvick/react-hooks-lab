import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const response = await axios.get(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    console.log(response);
    setList(response.data);
  };

  const mappedQuotes = (element, index) => {
    return <ul key={index}>{element}</ul>;
  };

  return (
    <div className="App">
      {list.map(mappedQuotes)}
      <button onClick={getQuote}>Next</button>
    </div>
  );
}

//https://ron-swanson-quotes.herokuapp.com/v2/quotes
// https://www.swapi.tech/api/people/?name=r2
