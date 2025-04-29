import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Friends from './Friends';
import Users from './Users';

function App() {
  // const [count, setCount] = useState(0)
  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button clicked 2');
  }
  const addToFive = (num)=>{
    alert(num + 5);
  }

  return (
    <div>

      <h3>React Core Concept 2 </h3>
      <Friends></Friends>
      
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('third clicked')}}>third</button>
      
      <button onClick={()=>addToFive(3)}>Four</button>
     
    </div>
     
    
  )
}

export default App
