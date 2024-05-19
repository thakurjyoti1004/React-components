import ToDo from "./components/to_do_list/Header";
import Table from "./components/table/Table";
import "../src/components/to_do_list/style.css";
import "../src/components/table/table.css";
import Modal from "./components/modal";
import { useState } from "react";
import Pagination from "./components/pagination";
import CardsFilter from "../src/components/cards_filter";
import "./app.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOnDelete = () => {
    console.log("This is deleted.");
  };
  const handleOnCancel = () => {
    setShowModal(false);
  };


  return (
    <div className="app">
      {/* <button onClick={() => setShowModal(true)}>Show modal</button>
      <Modal
        showModal={showModal}
        primaryBtnConfig={{ text: "Delete", onClick: handleOnDelete }}
        secondaryBtnConfig={{ text: "Cancel", onClick: handleOnCancel }}
      /> */}
      {/* <Table /> */}
      {/* <ToDo/> */}
      <CardsFilter/>
      {/* <Pagination pages={5} onPageClick={onPageClick}/> */}
    </div>
  );
}
