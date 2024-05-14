import { useEffect, useState } from "react";
import "../../components/pagination/style.css";
import axios from "axios";
import { data } from "../pagination/constant";

const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [list, setList] = useState(userData);

  const task = { all: "all", completed: "completed", pending: "pending" };
  const [searchText, setSearchText] = useState("");
  const [filteredListById, setFilteredListById] = useState([]);

  const fetchedResponse = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    setUserData(response.data);
    setList(response.data);
  };

  useEffect(() => {
    fetchedResponse();
  }, []);
  const handleDropdownValue = (e) => {
    if (list && list.length) {
      if (e.target.value === task.pending) {
        const filterPendingTask = list.filter((ele) => ele.completed === false);
        setUserData(filterPendingTask);
      } else if (e.target.value === task.completed) {
        const filterCompletedTasks = list.filter(
          (ele) => ele.completed === true
        );
        setUserData(filterCompletedTasks);
      } else {
        setUserData(list);
      }
    }
  };

  const handleSearch = (e) => {
  
  };
  return (
    <>
      <div className="searchBar-dropdown-div">
        <input
          className="search-bar"
          type="text"
          value={searchText}
          placeholder="Search here...."
          onChange={handleSearch}
        />
        <select
          name="drop-down"
          className="drop-down"
          onChange={handleDropdownValue}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="main-div">
        {userData &&
          userData.length > 0 &&
          userData.map((userData) => {
            return (
              <>
                <div className="card-div">
                  <div className="text-div">
                    <p>{userData.id}</p>
                    <p>{userData.title}</p>
                    {userData.completed === true ? (
                      <p className="completed-status">Completed</p>
                    ) : (
                      <p className="pending-status">Pending</p>
                    )}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
export default Pagination;
