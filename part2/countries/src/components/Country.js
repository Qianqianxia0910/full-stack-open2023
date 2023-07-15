import React, { useState, useEffect } from "react";
import Weather from "./Weather";

const Countryinfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="200"
      />
      {/* <Weather capital={country.capital} /> */}
    </div>
  );
};

const Country = ({ country }) => {
  const [countryShow, setCountryShow] = useState(false);
  const handleCountryShow = () => {
    setCountryShow(!countryShow);
  };

  return (
    <div>
      {country.name.common}
      <button onClick={handleCountryShow}>show</button>
      {countryShow === true && <Countryinfo country={country} />}
    </div>
  );
};

export default Country;
