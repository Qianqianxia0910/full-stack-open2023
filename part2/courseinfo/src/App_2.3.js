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

const Total = ({parts}) =>{
  return <div>total of {parts.reduce((sum,part) => sum+part.exercises,0)} exercises </div>
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
  // var ex =[]
  // for(var i=0; i<courses.parts.length; i++){
  //   ex.push(courses.parts[i].exercises)
  // }
  // console.log("ex",ex)

  // var sum = courses.parts.map(function(part) {return part.exercises})
  // console.log("sum",sum)

  // // arrow function version
  // var sum2 = courses.parts.map(part => part.exercises)
  // console.log("sum2",sum2)

//   var totalAmount = 0
//   for (var i=0; i<courses.parts.length; i++) {
//     totalAmount += courses.parts[i].exercises
//   }
//   console.log("totalAmount",totalAmount)


//   var partsArray = courses.parts
//   var totalAmount2 = partsArray.reduce(function(sum,part){
//     console.log("hello",sum,part)
//     return sum+part.exercises},0)
//   console.log(totalAmount2)

//   //arrow function version
//  var totalAmount3 = partsArray.reduce((sum,part)=> sum+part.exercises,0)
//  console.log("3:",totalAmount3)

  return (
    <>
      <Header coursename={courses.name}/>
      <Content parts={courses.parts}/>
      <Total parts={courses.parts} />
    </>
  );
};

export default App;


