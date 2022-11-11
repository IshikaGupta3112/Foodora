import { Link } from "react-router-dom";

function SellerorBuyer(){
return(<>
<h1 id='areu'>Are You a seller or a buyer?</h1>
<Link to='/seller'><button id='sellerbtn'>Seller</button></Link>
<Link to='/buyer'><button id='buyerbtn'>Buyer</button></Link>
</>);
}
export default SellerorBuyer;