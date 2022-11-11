import { Link } from "react-router-dom";
import './sellerorbuyer.css';
import backgroundimg from '../assets/backgroundimg.jpg';
function SellerorBuyer(){
return(<>
<div id="frontpage"><img src={backgroundimg}></img></div>
<h1 id='areuu'>Are You a seller or a buyer?</h1>
<div id='btns'>
<Link to='/seller'><button id='sellerbtn'>Seller</button></Link>
<Link to='/buyer'><button id='buyerbtn'>Buyer</button></Link>
</div>
</>);
}
export default SellerorBuyer;