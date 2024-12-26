import React from "react";
import "./Task.css";

interface Props {
  task: string;
  onDeleteTask: React.MouseEventHandler;
  onToggleTask: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <div>
        <label>Accomplished</label>
        <input type="checkbox" onClick={onToggleTask}></input>
        <br />
        <button className="btnDelete" onClick={onDeleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
