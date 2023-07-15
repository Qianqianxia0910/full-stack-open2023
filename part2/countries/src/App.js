import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterText, setFilterText] = useState("");

  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  function handleFilterChange(event) {
    setFilterText(event.target.value);
  }

  return (
    <div>
      <Filter filterText={filterText} handleFilterChange={handleFilterChange} />
      <Countries countries={countries} filterText={filterText} />
    </div>
  );
};

export default App;
