import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../reducers/taskReducer"; // ✅ update path if needed

const TaskList = () => {
  // ✅ Access tasks array from state.tasks.tasks
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Your Tasks:</h3>
      <ul className="tasks space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              className="task flex justify-between items-center bg-white border border-gray-300 rounded-md p-3 shadow-sm"
              key={task.id}
            >
              <span className="text-gray-800">{task.text}</span>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No tasks added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
