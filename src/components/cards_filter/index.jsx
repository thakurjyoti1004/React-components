import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Pagination from "../pagination";

const CardsFilter = () => {
  const [userData, setUserData] = useState([]);
  const [list, setList] = useState([]);

  const task = { all: "all", completed: "completed", pending: "pending" };
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(15);

  const fetchedResponse = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setList(response.data);
    setUserData(response.data.slice(0, pageSize));
  };

  useEffect(() => {
    fetchedResponse();
  }, []);

  const handleDropdownValue = (e) => {
    if (list && list.length) {
      let filteredPendingTask = [];
      if (e.target.value === task.pending) {
        filteredPendingTask = list.filter((ele) => ele.completed === false);
      } else if (e.target.value === task.completed) {
        filteredPendingTask = list.filter((ele) => ele.completed === true);
      } else {
        filteredPendingTask = list;
      }
      getSearchedList(filteredPendingTask, searchText);
    }
  };

  const getSearchedList = (list, searchText) => {
    const value = searchText.toLowerCase();
    const searchFiltering = list.filter((ele) => ele.title.includes(value));
    setUserData(searchFiltering);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    getSearchedList(userData, e.target.value);
  };

  const onPageClick = (pageNo) => {
    const startIndex = (pageNo - 1) * pageSize;
    const endIndex = pageNo * pageSize;
    const slicedArr = list.slice(startIndex, endIndex);
    setUserData(slicedArr);
  };

  return (
    <>
      <Pagination pages={Math.ceil(list.length / pageSize)} onPageClick={onPageClick} />
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
export default CardsFilter;
