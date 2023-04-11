import React from "react";
import List from "./List";
import "../App.css";
import Display from "./Display";
function App() {
  const [data, setdata] = React.useState([
    { id: 1, task: "Write hard code", done: true },
    { id: 2, task: "Handle state management", done: true },
    { id: 3, task: "Remodel", done: false },
    { id: 4, task: "Bug", done: false },
  ]);
  const [f, setfilter] = React.useState("All");
  const [Ftodo, setFtodo] = React.useState([]);
  React.useEffect(
    ()=>{
      filterHandler()
    },[data,f]
  )
  const Addtask = (n) => {
    let id = Math.random(100)*100;
    setdata([...data, { id: id, task: n, done: false }]);
  };
  const filterHandler = () => {
    switch(f) {
      case "Done":setFtodo(data.filter((w) => w.done===true))
        break;
      case "Undone":setFtodo(data.filter((d) => d.done===false))
        break;
      default:setFtodo(data);
    }
  };

  return (
    <div className="App">
      <h1 className="text-center mt-3">Hein's Todo List</h1>
      <Display
        Addtask={Addtask}
        filterHandler={filterHandler}
        setfilter={setfilter}
      />

      {Ftodo.map((n) => (
        <List
          key={n.id}
          id={n.id}
          name={n.task}
          done={n.done}
          data={data}
          setdata={setdata}
        />
      ))}
    </div>
  );
}

export default App;
