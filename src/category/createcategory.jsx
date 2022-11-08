import CategoryList from "./categorylist";
import Categorycard from "./categorycard";
import "./category.css"
function CreatecatList() {
  function createList2(CategoryList) {
    return (
      <Categorycard
        key={CategoryList.id}
        name={CategoryList.name}
       price={CategoryList.price}
       actPrice={CategoryList.actPrice}
        time={CategoryList.time}
       company={CategoryList.company}
      />
    );
  }
  return (
    <>
    <div id="categoryitem">
      {CategoryList.map(createList2)};
   </div>
 </>
  );
}

export default CreatecatList;
