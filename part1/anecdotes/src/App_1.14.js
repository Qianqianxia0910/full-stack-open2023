import { useState } from 'react'

const Header =() => <h1>Anecdote of the day</h1>

const Header2 =()=> <h1>Anecdote with most votes</h1>

const Button =({handleClick,text}) => {
  return(
    <button onClick={handleClick}>{text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(new Array(anecdotes.length).fill(0));

  const handleClick =()=>{
    const randomIndex = Math.floor(Math.random() * (anecdotes.length))
    // console.log(randomIndex)
    setSelected (randomIndex)
  }

  const addVote =()=>{
    const pointCopy = [...points]
    // console.log('points',points)
    // console.log('setpoints',setPoints)
    pointCopy[selected] +=1
    setPoints(pointCopy)
  }
  const bestIndex = points.indexOf(Math.max(...points));


  return (
    <div>
      <Header />
      <p>{anecdotes[selected]}</p>
      <div>has {points[selected]} points</div>
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={handleClick} text='Next Anecdote' />
      <Header2 />
      <div>{anecdotes[bestIndex]}</div>
      <div>has {points[bestIndex]} votes</div>
    </div>
  )
}

export default App;