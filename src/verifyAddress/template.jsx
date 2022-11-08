import "./verifyadd.css"
function Verify(props){
return(
    <>
   <div id="padder">
   <div id="contentcenter">
    <div id="ver">
        <div id="firstline">
    <input type="radio" name="addresss" id="myRadio"></input>
    <p id='myname'>{props.name}</p>
    </div>
    <div id="secondline">
    <p id="myadd">{props.area}</p>
    <p id="mycity" >City : {props.city}</p>
    <p id="mypin" >PinCode : {props.pin}</p>
    </div>
    <p id="myno">Phone Number : {props.no}</p>
   </div>
   </div>
   </div>
    </>
);
}
export default Verify;