// import RestrauntList from "./restrauntList";
// import Restrauntcard from "./restrauntcard";
// import './restrauntcard.css';

import RestrauntList from "./restrauntList";
import "./restrauntpage.css";
import Restrauntcard from "./restrauntcard";
function CreateRestraunt() {
  function createRest(RestrauntList) {
    return (
      <Restrauntcard
        key={RestrauntList.id}
        name={RestrauntList.name}
        actPrice={RestrauntList.actPrice}
        detail={RestrauntList.detail}
        price={RestrauntList.price}
      />
    );
  }
  return (
    <>
    <div id="restrauntlist">
      {RestrauntList.map(createRest)};
   </div>
 </>
  );
}

export default CreateRestraunt;
