import react from 'react';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Forgot from './components/Forgot.jsx';
import Otp from './components/Otp.jsx'
import Main from './components/Main.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function App(){
    return(
        <div> 
          
             <Router>
                <Routes>
                   <Route path='/' exact element={   <Navbar /> }>  
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
             </Routes>
        </Router>
        </div>

  );
}
export default App;