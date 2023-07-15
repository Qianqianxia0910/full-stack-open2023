import React from "react";

const Filter = ({ filterText, handleFilterChange }) => {
  return (
    <div>
      Find countries <input value={filterText} onChange={handleFilterChange} />
    </div>
  );
};
export default Filter;
