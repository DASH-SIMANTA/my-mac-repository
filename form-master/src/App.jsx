import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import HookForm from './components/HookForm/HookForm'
// import Reusable from './components/ReusableForm/Reusable'
// import RefFrom from './components/RefForm/RefFrom'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  // const handleSignUpSubmit = data => {
   
  //   console.log('Sign Up Data',data);
  // };
  // const handleUpdateProfileSubmit = data => {
   
  //   console.log('Profile updated', data);
  // };

  return (
    <>
     
      <h1>Form Master</h1>
      <GrandPa></GrandPa>

      
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      {/* <Reusable
       fromTitle={'SIgn Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now</p>
        </div>

       </Reusable> */}
      {/* <Reusable fromTitle={'Profile Update'} handleSubmit={handleUpdateProfileSubmit} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile Updated</p>
        </div>

      </Reusable> */}
      
     
    </>
  )
}

export default App
