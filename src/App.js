import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Error from './components/Error';

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type = 'success') => {
    setAlert({
      message:message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode = () =>{
      if(mode === "dark"){
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Dark Mode Enabled","success");
      }else{
        setMode("dark");
        document.body.style.backgroundColor = "#495057";
        showAlert("Light Mode Enabled","success");
      }
  }
  return (
      <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Form mode={mode} showAlert={showAlert}/>
          </div>
      </>
  );
}

export default App;