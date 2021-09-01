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
    <>
      {parts.map( part => <Part key={part.id} name={part.name} exercises={part.exercises} /> )}
    </>
  )
}

const Part = ({ name, exercises }) => {
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce( (aux, part) => aux + part.exercises, 0)

  return(
    <p>Number of exercises: {total}</p>
  )
}

const Courses = ({ courses }) => {
  return(
  <>
    {courses.map(course => 
      <div key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )}
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
  return <Courses courses={courses} />
}

export default App;
