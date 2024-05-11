import { useState } from "react";

const ListItem = ({ ele, handleDelete, toDoList, setToDoList }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [updatedToDoName, setUpdatedToDoName] = useState(ele.name);

  const handleEditing = () => {
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(true);
  };
  const updatedInput = (e) => {
    setUpdatedToDoName(e.target.value);
  };

  const handleSave = (id) => {
    const inputName = toDoList.map((ele) => {
      if (ele.id === id) {
        ele.name = updatedToDoName;
        return ele;
      }
    });
    setToDoList(inputName);
    setIsEditing(true);
  };

  const handleStatus = (id) => {
    const checkStatus = toDoList.map((ele) => {
      if (ele.id === id) {
        if (ele.status === "inProgress") {
          ele.status = "completed";
        } else {
          ele.status = "inProgress";
        }
      }
      return ele;
    });

    setToDoList(checkStatus);
  };
  return (
    <div className="listItem">
      {isEditing ? (
        <>
          <div className="input-list-name">
            <input
              type="checkbox"
              checked={ele.status === "completed"}
              onChange={() => handleStatus(ele.id)}
              className="checkbox"
            />
            <p className="list-name">{ele.name}</p>
          </div>

          <div>
            <button className="primary-action-btn button" onClick={handleEditing}>
              Edit
            </button>
            <button className="delete-action-btn button" onClick={() => handleDelete(ele.id)}>
              Delete
            </button>
          </div>
        </>
      ) : (
        <div className="update-div">
          <input
            className="update-Input"
            type="text"
            value={updatedToDoName}
            onChange={updatedInput}
          />
          <div>
            <button className="primary-action-btn button" onClick={() => handleSave(ele.id)}>
              Save
            </button>
            <button className="secondary-action-btn button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ListItem;
