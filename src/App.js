// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';
import About from './Components/About';
import Alert from './Components/Alert';
import React, {useState} from 'react';

// Router
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";


function App() { 

  // Dark mode enable or disable
  const [mode, setMode] = useState('light'); // wheather dark mode is enable or not 
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#04334a';
      showAlert("Dark mode has been enabled", "success"); //alert
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "warning"); //alert
    }
  };

  //show alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} active={"active"}/>
      <Alert alert={alert}/>
      
      <Routes>
        <Route exact path="/" element={<TextForm heading= "ENTER THE TEXT TO ANALYZE BELOW:"  mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>

      <Footer mode={mode}/>
    </Router>
    </>
  );
}

export default App;
