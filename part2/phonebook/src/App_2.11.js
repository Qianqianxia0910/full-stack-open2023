import { useState ,useEffect} from 'react'
import React from "react";

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import personService from './services/persons.js'



const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filteredPersons, setFilteredPersons] = useState(null);

    //fetching person data from server
    useEffect(() => {
      personService.getAll().then((initialPersons) => {
        setPersons(initialPersons);
      });
    }, []);

    const handleNameChange = (event) => {
      setNewName(event.target.value);
    };
  
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
    };

    const handleFilter = (event) => {
      setFilter(event.target.value);
      const filtered = persons.filter((person) =>
        // Check if the search term is included in the names in the phonebook
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
  
      setFilteredPersons(filtered);
    };
    
    const addPerson = (event) => {
      event.preventDefault()
      if (persons.find(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
        return
      }
  
      const personObject = {
        name: newName,
        number: newNumber,
        id: Date.now(),
    }  
      setPersons(persons.concat(personObject))
      setNewNumber('')
      setNewName('')
    }
  
    const handlePersonChange = (event) => {
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
    
    const handleFilterChange = (event) => {
      setFilter(event.target.value);
      setShowAll(false);
    };
  
    const filteredPersons = showAll
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson} nameValue={newName} onNameChange={handlePersonChange} numberValue={newNumber} onNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
      }
  
  export default App;