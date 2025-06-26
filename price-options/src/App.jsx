import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
   <div>
     <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
      <div>
        <h1 className='text-7xl text-center bg-gray-400'>Vite + React</h1>
      </div>

      <PriceOptions></PriceOptions>
      
      
    
   </div>
   
  )
}

export default App
