import react from 'react';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Forgot from './components/Forgot.jsx';
import Otp from './components/Otp.jsx'
import Otp2 from './components/Otp2.jsx'
import Main from './components/Main.jsx';
import Password from './components/Password.jsx';
import Home from './pages/homee/home.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
    var y = localStorage.getItem("check");
function App(){
  
    return(
        <div>   
             <Router>
                <Routes>
                   <Route path='/' exact element={<Navbar /> }>  
                     </Route>
                     <Route path='/signup' exact element={<Signup />}>
                     </Route>
                     <Route path='/login' exact element={<Login />}>
                     </Route>
                     <Route path='/forgot' exact element={<Forgot />}>
                     </Route>
                     <Route path='/otp' exact element={<Otp />}>
                     </Route>
                     <Route path='/main' exact element={<Main />}>
                     </Route>    
                     <Route path='/otp2' exact element={<Otp2 />}>
                     </Route>   
                     <Route path='/password' exact element={<Password />}>
                     </Route>    
                     <Route path='/home' exact element={<Home />}>
                     </Route>             

             </Routes>
        </Router>
        </div>

  );
}
export default App;