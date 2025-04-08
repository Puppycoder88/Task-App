import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/taskReducer";

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const taskText = inputRef.current.value.trim();
    if (taskText !== "") {
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
      dispatch(addTodo(newTask));
      inputRef.current.value = "";
    }
  }

  return (
    <div className="task-component">
      <div className="flex gap-3 items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="flex-1 px-4 py-2 rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addNewTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Task;
