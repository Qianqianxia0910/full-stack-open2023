import { useState } from 'react'
const Header =() => <h1>Give Feedback</h1>

const Header2 =()=> <h1>statistics</h1>

const Button =({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
  )

const StatisticLine =(props)=> {
  return(
<tr>
<td>{props.text}</td>
<td>{props.value}</td>
</tr>
  )
}

const Sta =(props)=>{

if (props.clicks ===0 ){
  return(
    <div>No feedback given</div>
  )
}
return(
<table>
<tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.total} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive} />
</tbody>
</table>
)
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks, setAll] = useState(0)

  const handleGood = ()=> {
    setGood(good+1) 
    setAll(allClicks+1)
  }

  const handleNeutral = ()=> {
    setNeutral(neutral+1)
    setAll(allClicks+1)
  }
  const handleBad = ()=> {
    setBad(bad+1)
    setAll(allClicks+1)
  }


  const total = good + neutral + bad;
  const average = ((good - bad) / total) * 100;
  const positive = (good / total) * 100;

  return (
    <div>
    <Header />
    <Button handleClick={handleGood} text= 'good' />
    <Button handleClick={handleNeutral} text= 'Neutral' />
    <Button handleClick={handleBad} text= 'Bad' />
    <Header2 />
    <Sta clicks={allClicks} good={good} neutral={neutral} bad={bad} total={total} average={average.toFixed(2)} positive={positive.toFixed(2) + '%'}/>
    </div>
  )
}

export default App;

