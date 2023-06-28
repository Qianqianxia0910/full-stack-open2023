import React from 'react'
import ReactDOM from 'react-dom/client'

import CourseContent from './components/CourseContent'
import './components/CourseContent/index.css'

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
        <div className='container'>
        {courses.map(course => (
            <CourseContent key={course.id} courses={course}/>
        ))}
        </div>
    );
  };
  
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// ReactDOM.render(<App />, document.getElementById("root"));