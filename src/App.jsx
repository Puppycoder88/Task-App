import React from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-300 to-gray-300 p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Task App</h1>
        <Task />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
