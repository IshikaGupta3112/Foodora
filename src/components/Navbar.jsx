import react from 'react';
import '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/index.css';
import Foodora from 'Foodora.png';
import Navs from './navs.jsx';
function Navbar(){
return(
    <>
    <Navs />
        <img src={Foodora} alt='' id='back'/>
        </>
)
}
export default Navbar;