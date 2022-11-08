import Navs2 from '../pages/navss/navs2';
import './newaddress.css'
import Contactus from '../pages/contactus/contactus';
function NewAddress(){
return(<>
<Navs2 />
<div>
<p id='newaddp'>ADD NEW ADDRESS</p>
<div id="addform">
    <form id='newaddform'>
        <div id="starrt">
        <label htmlFor='name'>Name</label>
        <input type="text" />
        <label htmlFor='area'>Area</label>
        <input type="text" />
        <label htmlFor='state'>State</label>
        <input type="text" />
        </div>
        <div id="endd">
        <label htmlFor='phonenumber'>Phone Number</label>
        <input type="text" />
        <label htmlFor='city'>City</label>
        <input type="text" />
        <label htmlFor='pincode'>Pincode</label>
        <input type="text" />
        </div>
        <button type="submit" id="nxtbtn">NEXT</button>
    </form>
</div>
</div>
<div id="contact2">
    <Contactus />
</div>
</>);
}
export default NewAddress;