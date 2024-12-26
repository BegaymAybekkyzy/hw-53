import React from 'react';
import "./Task.css";

interface Props {
  task: string;
  onDeleteTask: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({task, onDeleteTask}) => {
  return (
    <div className="task">
      <p>{task}</p>
      <button onClick={onDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;