import { useState } from "react";
import List from "./List";

const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoInput, setToDoInput] = useState("");

  const handleToDoInput = (e) => {
    setToDoInput(e.target.value);
  };
  const handleAddOnClick = () => {
    if (toDoInput.trim().length > 0) {
      setToDoList([
        ...toDoList,
        {
          name: toDoInput,
          id: Date.now(),
          status: "inProgress",
        },
      ]);

      setToDoInput("");
    }
  };
  const handleDelete = (id) => {
    const filteredList = toDoList.filter((ele) => ele.id !== id);
    setToDoList(filteredList);
  };
  return (
    <>
      <div className="header">
        <h1>To Do App</h1>
        <div className="add-header">
          <input
            className="addInput"
            type="text"
            placeholder="Add to do list here..."
            value={toDoInput}
            onChange={handleToDoInput}
          />
          <button className="add-btn" onClick={handleAddOnClick}>Add</button>
        </div>
        {!!toDoList.length && (
          <List
            toDoList={toDoList}
            handleDelete={handleDelete}
            setToDoInput={setToDoInput}
            setToDoList={setToDoList}
          />
        )}
      </div>
    </>
  );
};
export default ToDo;
