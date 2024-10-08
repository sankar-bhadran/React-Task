import React, { useState } from "react";
import { toast } from "react-toastify";

const AddCity = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (tasks.includes(input)) {
      toast("Task already exists!");
      return;
    }
    if (input.trim() === "") {
      toast("City Name Empty  ");
      return;
    }
    setTasks([...tasks, input]);
    setInput("");
  };
  return (
    <>
      <div className="bg-customGrey h-16   ">
        <h1 className="text-4xl font-bold flex justify-center p-3 font-Manrope text-customWhite">
          Add City
        </h1>
      </div>
      <div>
        <form onSubmit={addTask}>
          <div className="flex justify-center gap-5 mt-4 p-5">
            <input
              type="text"
              placeholder="Enter City Name"
              className="px-4 py-2 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className=" px-4 py-2 bg-customBlue rounded font-bold font-Manrope hover:bg-white-500">
              Add city
            </button>
          </div>
        </form>
      </div>

      <div className="mt-4">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <div className=" flex justify-center mb-5 " key={index}>
                <div className="bg-customBlue w-60 h-10 flex justify-center items-center rounded">
                  <li key={index} className="text-customWhite font-Manrope p-2">
                    {task}
                  </li>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <p className="text-customWhite font-Manrope p-2">
            No tasks added yet.
          </p>
        )}
      </div>
    </>
  );
};

export default AddCity;
