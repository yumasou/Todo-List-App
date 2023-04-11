const List = (props) => {
  const dele = () => {
    props.setdata(props.data.filter((n) => n.id !== props.id));
  };
  const don = () => {
    props.setdata(
      props.data.map((item) => {
        if (item.id === props.id) {
          return { ...item, done: !item.done };
        } else return item;
      })
    );
  };
  return (
    <div className="mt-2 col-10 col-lg-6 mx-auto">
      <li className="mx-auto input-group ">
        <div className="form-control">
          {props.done ? <del className="form-control">{props.name}</del> : <div className="form-control">{props.name}</div>
          }{" "}
        </div>
        <div className="btn-group input-group-text">
          <button className="btn btn-outline-primary bg-info" onClick={don}>
            <i className="fa-solid fa-check bg-info"></i>
          </button>
          <button className="btn btn-outline-primary bg-info" onClick={dele}>
            <i className="fa-solid fa-trash bg-info"></i>
          </button>
        </div>
      </li>
    </div>
  );
};
export default List;
