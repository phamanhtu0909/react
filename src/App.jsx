import { useState } from "react";

//nguyên tắc đặt tên components tất cả chữ cái đầu Viết Hoa
function ToDoApp() {
  // vùng của js

  //re-render: khi mà 1 STATE bị thay đổi
  //==> biến number thành 1 cái STATE của REACT
  // ==> mỗi lần number thay đổi REACT sẽ re-render và người dùng sẽ thấy giá trị mới
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  function handleInputChange(event) {
    //event => event này của thằng nào
    //lấy giá trị của người dùng nhập và cập nhật lại biến taskName
    setTaskName(event.target.value);
  }
  function handleAddNewTask() {
    //lấy giá trị ô input ==> taskName
    setTasks([...tasks, taskName]); //lấy lại ds tasks ở trên và thêm 1 cái mới
    setTaskName(""); //set lại ô input
  }

  return (
    <div className="container">
      <div></div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={taskName}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-success"
          type="button"
          id="button-addon2"
          onClick={handleAddNewTask}
        >
          Add
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {/* cứ mỗi task nằm trong tasks(DS) thì nó sẽ chuyển thành 1 <tr></tr>*/}
          {/* map*/}
          {tasks.map((task, index) => (
            <tr key={task}>
              {" "}
              {/*nó bắt buộc phải có key bằng tên biến*/}
              <th scope="row">{index}</th>
              <td>{task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoApp;
