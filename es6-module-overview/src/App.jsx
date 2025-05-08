import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'


function App() {
  const [watches,setWatches] =useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
  .then(data=> setWatches(data))
  },[])

  // const watches =[
  //   {id:1 , name: 'Apple watch', price:200},
  //   {id:2 , name: 'samsung watch', price:300},
  //   {id:3 , name: 'MI watch', price:400},
  //   {id:4 , name: 'Casio watch', price:2500}
  // ]
//   const watches =[
//   {
//     "id": 1,
//     "brand": "Apple",
//     "model": "Watch Series 9",
//     "features": ["Heart Rate Monitor", "ECG", "GPS", "Water Resistant", "Bluetooth"],
//     "price": 399.99,
//     "inStock": true
//   },
//   {
//     "id": 2,
//     "brand": "Samsung",
//     "model": "Galaxy Watch 6",
//     "features": ["Sleep Tracking", "SpO2 Monitor", "LTE", "GPS", "Wireless Charging"],
//     "price": 349.99,
//     "inStock": true
//   },
//   {
//     "id": 3,
//     "brand": "Garmin",
//     "model": "Venu 3",
//     "features": ["VO2 Max", "Pulse Ox", "Music Storage", "GPS", "Stress Tracking"],
//     "price": 449.99,
//     "inStock": false
//   },
//   {
//     "id": 4,
//     "brand": "Fitbit",
//     "model": "Sense 2",
//     "features": ["EDA Sensor", "Sleep Score", "Heart Rate", "Alexa Built-in", "SpO2"],
//     "price": 299.95,
//     "inStock": true
//   },
//   {
//     "id": 5,
//     "brand": "Amazfit",
//     "model": "GTR 4",
//     "features": ["Dual-band GPS", "Music Control", "Alexa Support", "Offline Voice Assistant"],
//     "price": 199.99,
//     "inStock": true
//   }
// ]


  return (
    <>
      
      <h1>Vite + React</h1>
      <div>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
      </div>
     
    </>
  )
}

export default App
