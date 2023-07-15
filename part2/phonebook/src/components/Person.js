import React from "react";

const Person = ({ person, deletePerson }) => (
  <form>
    <li>
      {person.name} {person.number}
      <button onClick={() => deletePerson(person.id)}>Delete</button>
    </li>
  </form>
);

export default Person;
