import ToDo from "./components/to_do_list/Header";
import Table from "./components/table/Table";
import "../src/components/to_do_list/style.css";
import "../src/components/table/table.css";
export default function App() {
  return (
    <>
      <div className="App">
        <Table />
        {/* <ToDo/> */}
      </div>
    </>
  );
}
