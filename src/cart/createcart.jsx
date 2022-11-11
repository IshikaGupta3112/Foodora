import Cartitem from "./cart";
import CreateCart from "./cartcomp";
function Createlistcart() {
  function createcart2(Cartitem) {
    return (
      <CreateCart
        name={Cartitem.name}
       price={Cartitem.price}
      />
    );
  }
  return (
    <>
    <div id="categoryitem2">
      {Cartitem.map(createcart2)};
   </div>
 </>
  );
}

export default Createlistcart;
