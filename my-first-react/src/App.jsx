import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors =['Rosan', 'Joshim','Salman shah','riyaj','rubel'];

  const singer = [
    {id:1, name: 'Dr mahfuzur Rahman', age: 68},
    {id:2, name: 'Shuvro dev', age: 58},
    {id:3, name: 'Doly santayaoni', age: 30},
    {id:4, name: 'pritom bhai', age: 30}
    
  ];
  const books =[
    {id:1, name:'bangla', price:120},
    {id:2, name:'english', price:200},
    {id:3, name:'math', price:150},
    {id:4, name:'biology', price:300}
  ]

  return (
    <>  
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {/* {
        singer.map(singer => <Singer singer ={singer}></Singer>)
      } */}
      {/* <Actor name={'bappa raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      {/* <Todo task='Learn react' isDone= {true}></Todo>
      <Todo task='Explore core concept' isDone={false}></Todo>
      <Todo task='Try jsx' isDone={true}></Todo> */}
      {/* <Device name='laptop' price='112000'></Device>
      <Device name='phone' price='15000'></Device>
      <Device name='watch' price='9000'></Device>
      <Person></Person>
      <Student grade ='7' score='99'></Student>
      <Student grade ={12} score='88'></Student>
      <Developer></Developer>
      <Developer1></Developer1> */}
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
const {grade, score} ={grade:'7', score:'99'}
function Student({grade, score=0}){
  console.log(grade,score);
  const person ={name: 'Habib', age:12};
  return(
    <div className='student'>
    
    <h3>This is a student</h3>
    <p>name:{person.name}</p>
    <p>age: {person.age}</p>
    <p>grade: {grade}</p>
    <p>Score: {score}</p>
    
    
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
