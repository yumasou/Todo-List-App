import React from "react";
const Display = (props) => {
  const [text, settext] = React.useState('');
  const change = (e) => {
    settext(e.target.value);
  };
  const add = (e) => {
    e.preventDefault();
    props.Addtask(text);
    settext("");
  };
  const selectHandle=(e)=>{
    props.setfilter(e.target.value)
    props.filterHandler()
  }
  return (
    <div className="my-lg-5 my-4">
      <div className="row">
        <div className="col-lg-4 col-6 ms-auto">
          <div className="input-group">
            <input
              value={text}
              type="text"
              className="form-control"
              onChange={change}
              placeholder="Enter task"
            />
            <button className="input-group-text bg-info btn btn-outline-primary" onClick={add}>
            <i className="fa-solid fa-plus bg-info"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-2 col-4 me-auto">
          <select name="type" onChange={selectHandle} className="form-select ">
            <option value="All">All</option>
            <option value="Undone"> Undone </option>
            <option value="Done"> Done </option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Display;
