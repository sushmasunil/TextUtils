import React , { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
   <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <div className="container">
      
          <Routes>
                 <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode}/> }></Route>
                 <Route exact path='/about' element={< About />}></Route>
                
          </Routes>
        </div>
      
        </Router>
      
      
    </>
  );
}

export default App;
