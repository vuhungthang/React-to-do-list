import {useState} from "react";

function App() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    function handleChange(event) {
        setTask(event.target.value);
    }
    function handleClick(event) {
        event.preventDefault();
        if(task.trim() !== '') {
            setTaskList([...taskList,task])
            setTask('');
        }
    }
    function clear() {
        setTaskList([]);
    }

    return (
      <>
          <h1>To-do-List</h1>
          <form>
              <label htmlFor={"to-do"}> Task: </label>
              <input type={"text"} id={"to-do"} onChange={handleChange} value={task}/>
              <button
                  type={"submit"}
                  value={task}
                  onClick={handleClick}
              >
                  Add
              </button>
          </form>
          <ol>
              {taskList.map((task, index) => {
                  return (
                      <li key={index}>{task}</li>
                  )
              })}
          </ol>

          <button onClick={clear}>Clear</button>
      </>
  )
}
export default App
