import ListItem from "./ListItem";


const List = ({ toDoList, handleDelete, setToDoInput, setToDoList }) => {
  return (
    <div className="list">
      <ul>
        {toDoList.map((ele) => {
          return (
            <li key={ele.id}>
              <ListItem
                ele={ele}
                toDoList={toDoList}
                handleDelete={handleDelete}
                setToDoInput={setToDoInput}
                setToDoList={setToDoList}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default List;
