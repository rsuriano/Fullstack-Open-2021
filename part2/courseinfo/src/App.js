import React from 'react'

const Header = ({ name }) => {
  return(
    <h1>
      {name}
    </h1>
  )
}

const Content = ({ parts }) => {
  return(
    <div>
      {parts.map( part => <Part key={part.id} name={part.name} exercises={part.exercises} /> )}
    </div>
  )
}

const Part = ({ name, exercises }) => {
  console.log(name)
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[1].exercises+props.parts[2].exercises+props.parts[3].exercises}</p>
  )
}

const Course = ({ course }) => {
  return(
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>
  )
}

const App = () => {
  const course = {
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
  }
  console.log(course)
  return <Course course={course} />
}

export default App;