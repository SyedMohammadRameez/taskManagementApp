import React, { useState } from "react";
import "./Task.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { Link } from "react-router-dom";
import PopupTask from "./PopupTask";
import { useSelector } from "react-redux";

function Task() {
  const [taskPopup, setTaskPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const tasks = useSelector((state) => state.tasks);
  console.log({ tasks });

  const updatePopup = (input) => {
    debugger;
    setTitle(input.title);
    setDate(input.date);
    setDescription(input.description);
  };

  return (
    <>
      <div className="task_container">
        <div className="left">
          <div className="task">Task Management</div>
        </div>

        <div className="right">
          <div className="search_task_div">
            <SearchIcon
              sx={{
                position: "relative",
                top: "9px",
                left: "38px",
                color: "skyBlue",
              }}
            />
            <input
              className="search_task"
              type="text"
              placeholder="Search task..."
            />
          </div>

          <div className="filter_task">
            <FilterAltOutlinedIcon sx={{ marginBottom: "-6px" }} />
            Filter
          </div>
          <div className="sort_task">
            <FilterListOutlinedIcon sx={{ marginBottom: "-5px" }} />
            Sort
          </div>

          <button className="add_task_btn" onClick={() => setTaskPopup(true)}>
            <AssignmentOutlinedIcon
              sx={{ marginBottom: "-7px", marginRight: "7px" }}
            />
            Add New task
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "-7px" }} />

      <div className="table_div">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <TbodyTask
                key={task.id}
                {...task}
                updatePopup={updatePopup}
                setTaskPopup={setTaskPopup}
              />
            ))}
          </tbody>
        </table>
      </div>

      {taskPopup && (
        <PopupTask
          closePopup={() => setTaskPopup(false)}
          inputTitle={title}
          inputDate={date}
          inputdDescription={description}
        />
      )}
    </>
  );
}

export default Task;

function TbodyTask({ id, title, date, updatePopup, setTaskPopup }) {
  const handleEditTask = (e) => {
    setTaskPopup(true);
    updatePopup({ title, date });
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{title}</td>
      <td>xyz@gmail.com</td>
      <td>
        <select
          style={{
            borderRadius: "5px",
            border: "1px solid skyBlue",
            padding: "3px 8px",
          }}
        >
          <option value="" style={{ color: "blue" }}>
            In Progress{" "}
          </option>
          <option value="">Completed</option>
          <option value="">To Do</option>
          <option value="">Testing</option>
        </select>
      </td>
      <td>
        <button onClick={handleEditTask}>
          <EditNoteOutlinedIcon sx={{ color: "blue" }} />
        </button>

        <DeleteOutlineOutlinedIcon sx={{ color: "red", marginLeft: "8px" }} />
      </td>
    </tr>
  );
}
