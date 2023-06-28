import React from "react";

const Course = ({coursename,courseid})=> <h1 key={courseid}>{coursename}</h1>

const Total = ({parts,partid}) =>{
  return <h2 key={partid}>total of {parts.reduce((sum,part) => sum+part.exercises,0)} exercises </h2>
}

const Part = ({partname,partexercise,id})=> <li key={id}>{partname} {partexercise}</li>

const List = ({parts}) => {
return(
  <>
{parts.map(part => <Part key ={part.id} partname={part.name} partexercise={part.exercises} />)}
</>
)   
}

const Content = ({courses})=> {
  return(
    <>
    {courses.map(course => (
    <div key={course.id}>
    <Course coursename={course.name} courseid={course.id}/>
    <List parts={course.parts}/>
    <Total parts={course.parts} partid={course.id}/>
    </div>
    ))}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
      <div>
      <Content courses={courses}/>
      </div>
  );
};

export default App;

