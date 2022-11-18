
function Ordercard(props){
    return (
        <>
          <div id="padder3">
            <div id="contentcenter">
              <div id="ver">
                <div id="firstline">
                  <p id="myname2">Foodname : {props.foodname}</p>
                </div>
                <div id="secondline">
                  <p id="myadd">Food Price : {props.food_price}</p>
                </div>
                <p id="myno">Quantity : {props.quantity}</p>
              </div>
            </div>
          </div>
        </>
      );
}
export default Ordercard;
