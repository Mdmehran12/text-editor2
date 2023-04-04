
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert = (message, type) =>{

    setalert({
      msg : message,
     type: type })
     setTimeout(() => {
      setalert(null)
     }, 2000);
  }

  const togglemode = () => {
    if(mode === "light"){
      setmode ("dark") 
      document.body.style.backgroundColor =" #042743"
      showalert("darkmode has been enabled", "success")
    }
    else {
      setmode ("light")
      document.body.style.backgroundColor ="white"
      showalert("light mode has been enabled" , "success")

    }
  }
  return ( 
<>
<BrowserRouter>
  

<Navbar name="textUTils" home="home" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>
<div className='container'>


  

<Routes>
          <Route  path="/" element={  <Textform  heading="Enter Your Text Here"  mode={mode} />} />
          <Route  path="/about" element={<About />} />
       
        </Routes>
        </div>  
</BrowserRouter>

{/* <About/> */}
</>

     
  );
}



export default App;

