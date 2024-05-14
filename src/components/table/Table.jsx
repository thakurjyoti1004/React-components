import { useState } from "react";
import "../table/table.css";
const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [rollNo, setRollNo] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [idForEdit, setIdForEdit] = useState("null");

  const handleNameOnEdit = (ele) => {
    setIdForEdit(ele.id);
    setIsEditing(true);
    setName(ele.name);
    setStandard(ele.standard);
    setRollNo(ele.rollNo);
  };

  const handleOnCancel = () => {
    setIsEditing(false);
  };
  const handleDelete = (id) => {
    const filteredList = tableData.filter((ele) => ele.id !== id);
    setTableData(filteredList);
  };
  const handleSave = (ele) => {
    ele.name = name;
    ele.standard = standard;
    ele.rollNo = rollNo;
    setIsEditing(false);
  };
  const addNewRow = () => {
    setTableData([
      ...tableData,
      { name: "", standard: "", rollNo: "", id: Date.now() },
    ]);
  };

  return (
    <div className="table-div">
      <button className="add-row-btn" onClick={addNewRow}>
        Add Row
      </button>
      <table>
        <tr>
          <th className="table-heading">Name</th>
          <th className="table-heading">Standard</th>
          <th className="table-heading">Roll No.</th>
          <th className="table-heading">Actions</th>
        </tr>
        {tableData.map((ele) => {
          return (
            <tr key={ele.id}>
              {isEditing && ele.id === idForEdit ? (
                <td>
                  <input
                    className="table-input-field"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              ) : (
                <td>{ele.name}</td>
              )}
              {isEditing && ele.id === idForEdit ? (
                <td>
                  <input
                    className="table-input-field"
                    type="text"
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
                  />
                </td>
              ) : (
                <td>{ele.standard}</td>
              )}
              {isEditing && ele.id === idForEdit ? (
                <td>
                  <input
                    className="table-input-field"
                    type="text"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                  />
                </td>
              ) : (
                <td>{ele.rollNo}</td>
              )}
              {isEditing && ele.id === idForEdit ? (
                <td>
                  <button
                    className="primary-btn"
                    onClick={() => handleSave(ele)}
                  >
                    Save
                  </button>
                  <button className="secondary-btn" onClick={handleOnCancel}>
                    Cancel
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    className="primary-btn"
                    onClick={() => handleNameOnEdit(ele)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(ele.id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
