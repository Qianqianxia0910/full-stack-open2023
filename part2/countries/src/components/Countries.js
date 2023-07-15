import React from "react";
import Country from "./Country";

const Countries = ({ countries, filterText }) => {
  const filteredCountry =
    filterText === ""
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(filterText.toLowerCase())
        );

  if (filteredCountry.length > 10) {
    return "Too many matches, specify another filter";
  } else if (filteredCountry.length === 1) {
    return (
      <div>
        <Country country={filteredCountry[0]} />
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {filteredCountry.map((country) => (
            <Country key={country.name.common} country={country} />
          ))}
        </ul>
      </div>
    );
  }
};

export default Countries;
