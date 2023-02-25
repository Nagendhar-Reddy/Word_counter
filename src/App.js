import './App.css';
import Navbar from './Component/Navbar';
import Alert from './Component/Alert';
import About from './Component/About';
import Textform from './Component/Textform';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  
  const showalert = (message ,type)=>{
      setalert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setalert(null);
      }, 3000);
  }

  const toggle = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'gray';
      showalert("Dark mode has been Enabled" ,"success");
      document.title = "TextUtlis - Dark mode";
    }
    else{
      setmode('light') ;
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been Enabled" ,"success");
      document.title = "TextUtlis - Light mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutlis" about="About Utils" mode={mode} toggle = {toggle} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            {/* <About/> */}
          </Route>
          <Route exact path="/" element={<Textform heading="Enter the text below" mode={mode} showalert={showalert}/>}>
            {/* <Textform heading="Enter the text below" mode={mode} showalert={showalert}/> */}
          </Route>
        </Routes>
      </div>
    </Router>
    </> 
  );
}

export default App;