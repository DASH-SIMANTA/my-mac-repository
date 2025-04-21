import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>  
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person(){
  const age = 25;
  const money = 30;
  const person ={name: 'sakil', age:12};
  return <h3>I am {person.name} person with age: {age + money} </h3>
}

function Student(){
  const person ={name: 'Habib', age:12};
  return(
    <>
    
    <h3>This is a student</h3>
    <p>name:{person.name}</p>
    <p>age:</p>
    
    </>
  )
}

export default App
