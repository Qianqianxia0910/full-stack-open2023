import React from "react";

const Filter = ({ filter, handleFilter }) => {
  return (
    <form>
      Filter shown with: <input value={filter} onChange={handleFilter} />
    </form>
  );
};
export default Filter;
