import Contactus from "../pages/contactus/contactus";
import Navs2 from "../pages/navss/navs2";
import "./payment.css";
function Payment(){
return(<>
<Navs2 />
<div id='paymentbox'>
<div id='itemslist'>
<div id='itemnames1'>
    <p id='itemname1'>Chinese Burger</p>
    <p id='itemprice'>Rs.309</p>
    </div>
    <div id='itemnames1'>
    <p id='itemname1'>Chinese Burger</p>
    <p id='itemprice'>Rs.309</p>
    </div>
    <div id='itemnames1'>
    <p id='itemname1'>Chinese Burger</p>
    <p id='itemprice'>Rs.309</p>
    </div>
    <div id='itemnames1'>
    <p id='itemname1'>Chinese Burger</p>
    <p id='itemprice'>Rs.309</p>
    </div>
    <div id='itemnames1'>
    <p id='itemname1'>Chinese Burger</p>
    <p id='itemprice'>Rs.309</p>
    </div> 
</div>
<hr id='hr2'></hr>
<p id='faketotal'>Rs.320</p>
<div id='taxes'>
    <div id='tax1'>
    <p id='taxname'>CGST</p>
    <p id='taxprice'>Rs.20</p>
    </div>
</div>
<hr id='hr2'></hr>
<div id='total'>
    <div id='total1'>
<p id='totalname'>Total</p>
<p id='totalprice'>Rs.329</p>
</div>
</div>
</div>
<Contactus />
</>);
}
export default Payment;