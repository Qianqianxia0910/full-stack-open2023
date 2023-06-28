import React from "react";

const Header = ({coursename}) => <h1>{coursename}</h1>


const Part = ({partname,partexercise,id})=> <li key={id}>{partname} {partexercise}</li>

const Content = ({parts}) =>{
  return(
    <>
    {parts.map((part => <Part partname={part.name} partexercise={part.exercises} key={part.id}/>))}
    </>
  )
}


const App = () => {
  const courses = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };
 
  return (
    <>
      <Header coursename={courses.name}/>
      <Content parts={courses.parts}/>
    </>
  );
};

export default App;

