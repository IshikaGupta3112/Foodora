import "./verifyadd.css"
import Contactus from "../pages/contactus/contactus";
import Verify from "./template";
import CreateaddressList from "./createadd";
import Navs2 from "../pages/navss/navs2";
function Verifyadd(){
return(<>
<Navs2 />
<p id='veraddp'>VERIFY ADDRESS</p>
<p id='veraddp2'>+ Add New Address</p>
<CreateaddressList />
<Contactus />
</>);
}
export default Verifyadd;
