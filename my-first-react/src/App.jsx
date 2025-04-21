import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>  
      <h1>Vite + React</h1>
      <Device name='laptop' price='112000'></Device>
      <Device name='phone' price='15000'></Device>
      <Device name='watch' price='9000'></Device>
      <Person></Person>
      <Student grade ='7' score='99'></Student>
      <Developer></Developer>
      <Developer1></Developer1>
    </>
  )
}
function Device(props){
  console.log(props)
  return <h2>This device:{props.name} </h2>
}

function Person(){
  const age = 25;
  const money = 30;
  const person ={name: 'sakil', age:12};
  return <h3>I am {person.name} person with age: {age + money} </h3>
}

function Student(props){
  console.log(props);
  const person ={name: 'Habib', age:12};
  return(
    <div className='student'>
    
    <h3>This is a student</h3>
    <p>name:{person.name}</p>
    <p>age:</p>
    
    </div>
  )
}

function Developer(){
  const developerStyle ={
    margin: '20px',
    padding: '20px',
    border: '2px solid white',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Developer devo</h5>
      <p>Coding: </p>
      <p>Age: </p>
    </div>
  )
}

function Developer1(){
  return(
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid tomato',
      borderRadius: '20px'
    }}>
      <h5>Developer1 devo</h5>
      <p>Coding: </p>
      <p>Age: </p>
    </div>
  )
}

export default App
