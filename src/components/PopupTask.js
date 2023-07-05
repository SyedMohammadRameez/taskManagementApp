import React, { useState } from "react";
import "./PopupTask.css";
import { useDispatch } from "react-redux";

function PopupTask({
  inputTitle = "",
  inputDate = "",
  inputdDescription = "",
  closePopup,
}) {
  const [title, setTitle] = useState(inputTitle);
  const [date, setDate] = useState(inputDate);
  const [description, setDescription] = useState(inputdDescription);
  const dispatch = useDispatch();

  const handleTask = (e) => {
    console.log({ title, date, description });
    const data = { id: new Date().getTime(), title, date, description };
    dispatch({
      type: "ADD_NEW_TASK",
      data,
    });
  };
  return (
    <div className="popuptask">
      <div className="add-new-task">
        <div>Add New Task</div>
        <div>
          <button onClick={closePopup}>X</button>
        </div>
      </div>
      <div className="title">
        <div>Title</div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="inp"
          type="text"
        />
      </div>
      <div className="date">
        <div>Date</div>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="inp"
          type="date"
        />
      </div>
      <div className="description">
        <div>Description</div>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
          type="text"
        />
      </div>
      <div>
        <button onClick={handleTask} className="btn">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default PopupTask;
