import react from 'react';
import '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
var a;
function show(){
if(a==1){
document.getElementById('ul').style.left=0;
 return a=0;
}
else{
    document.getElementById('ul').style.left='-100vh';
     return a=1;
    }
}
function Navs(){
return(
    <>
    <nav>
    <div id='check' onClick={show}><i class="material-icons" id='icon'>menu</i></div>
        <ul id='ul'>
            <div><li>Home</li></div>    
            <div><li><Link to='/login'>Login</Link></li></div>
            <div><li><Link to='/signup'>Signup</Link></li></div>    
        </ul>
        </nav>
        </>
)
}
export default Navs;