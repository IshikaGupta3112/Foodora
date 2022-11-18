import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UserOrdercard(props){
const Navigate = useNavigate();
    function handleorder(e){
console.log(e.target.id);
localStorage.setItem("orderid2" , e.target.id);
Navigate("/ordershow");
    }
    return (
        <>
          <div id="padder3">
            <div className="contentcenter" id={props._id} onClick={handleorder}>
                <div id="firstline">
                  <p id="myname2">Status : {props.status}</p>
                </div>
              </div>
            </div>
        </>
      );
}
export default UserOrdercard;