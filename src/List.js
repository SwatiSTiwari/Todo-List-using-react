import "./List.css";
function List({ itemList, updateItemList }) {
  const deleteItemFromList = (key) => {
    const newList = itemList.filter((itemobj) => {
      return itemobj.key !== key;
    });
    updateItemList(newList);
  };
  return (
    <div>
      {itemList.map((itemobj) => {
        return (
          <div key={itemobj.key} className="Item">
            <p>{itemobj.item}</p>
            <button onClick={() => deleteItemFromList(itemobj.key)}>x</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
