// import About from './components/About';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {  
         
   // creating STATES  

  const [mode, setMode] = useState('light');   
  const [alert, setAlert] = useState(null);


   //FUNCTIONS

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1800);
  }



  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  // }

  const toggleMode=() =>{     //HERE WE NEED TO ADD CLASS PARAMETER INSIDETHE () IN, const toggleMode=() LETS SAY eg: cls        
      // removeBodyClasses();
      // document.body.classList.add('bg-'+cls)
      if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#323343';
      showAlert(" Dark mode has been enabled","success");
      // document.title ="My App - Dark Mode";  //to change the browser's tab name 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled","success");
      // document.title ="My App - Light Mode";     //to change the browser's tab name 
    }
  } 


  
return (

<>
{/* <Router>  */}

    <Navbar  title="MyApp" about="AboutUs" mode={mode} toggleMode={toggleMode} />


    <Alert alert={alert}/>


    <div className="container my-4">
    
        {/* <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route> */}

            <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}></Route> */}
        {/* </Routes> */}
        
    </div>

{/* </Router> */}

</>

  );
}

export default App;
