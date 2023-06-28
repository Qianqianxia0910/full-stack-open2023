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

const CourseContent = ({courses})=> (
    <>
    <Course coursename={courses.name} courseid={courses.id}/>
    <List parts={courses.parts}/>
    <Total parts={courses.parts} partid={courses.id}/>
    </>
)
export default CourseContent;