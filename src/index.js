import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Headers } from './components/Headers/Headers'
import { Content } from './components/Content/Content'
import { Total } from './components/Total/Total'

import { History } from './components/History'
import { Reviews } from './components/Reviews'


const App = () => {

  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  

  /*const initialState = {
    left : 0,
    right : 0
  }

  const [clicks, setClicks] = useState(initialState);

  const [ allClicks, updateAllClicks ] = useState(0)

  const { left, right } = clicks

  const handleLeftClick = () =>{

      setClicks(
        {
          right,
          left: left + 1
        }
      )
      updateAllClicks(allClicks + 1)

  }

  const handleRightClick = () =>{
 
      setClicks(
        {
          left,
          right: right + 1
        }
      )
      updateAllClicks(allClicks + 1)
  }

  const reset = () =>{
    setClicks(initialState)
    updateAllClicks(0)
  }

  console.log(clicks)
  console.log(allClicks)*/

  const initialState = []

  const [allClicks, updateAllClicks] = useState(initialState);

  const handleLeftClick = () => {
    
    updateAllClicks(allClicks.concat("L"))
  }

  const handleRightClick = () => {
    updateAllClicks(allClicks.concat("R"))
  }

  const reset = () => {
    updateAllClicks(initialState)
  }

  const left = allClicks.filter((click) => click === "L").length
  const right = allClicks.filter((click) => click === "R").length
  

  

  return (
    <div>
      <Headers course={course.name} />


      <Content parts={course.parts} />

      <Total totalExercises={course.parts} />

      <hr />
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <br/>
        <button onClick={reset}>Reset</button>
        <br/>
        {
          allClicks.length > 0 ? <p>Total clicks: {allClicks.length}</p> : "Haz click"
        }
        <History allClicks={allClicks} />
        <hr/>
        
        <Reviews/>
        
      </div>


    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
