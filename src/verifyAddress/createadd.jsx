import AddressList from "./addresslist";
import Verify from "./template";
import "./verifyadd.css";
function CreateaddressList() {
  function createList(AddressList) {
    return (
      <Verify
        key={AddressList.id}
        name={AddressList.name}
        area={AddressList.area}
        city={AddressList.city}
        pin={AddressList.pin}
        no={AddressList.no}
      />
    );
  }
  return (
    <>
      <div id="Addressitem">{AddressList.map(createList)};</div>
    </>
  );
}

export default CreateaddressList;
