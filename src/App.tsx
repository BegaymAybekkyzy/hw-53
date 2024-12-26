import "./App.css";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";
import React, { useState } from "react";

interface ITasks {
  taskText: string;
  id: string;
  done: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<ITasks[]>([
    {
      taskText: "Buy milk",
      id: "1731241782423",
      done: false,
    },
    {
      taskText: "Walk with dog",
      id: "1733321782165",
      done: false,
    },
    {
      taskText: "Do homework",
      id: "1735241582188",
      done: false,
    },
  ]);

  const [userTaskValue, setUserTaskValue] = useState<string>("");

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (userTaskValue.trim().length === 0) {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      taskText: userTaskValue,
      id: String(new Date().getTime()),
      done: false,
    };
    setTasks([...tasks, newTask]);
    setUserTaskValue("");
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return { ...task };
      }),
    );
  };

  return (
    <>
      <AddTaskForm
        onAddTaskForm={addNewTask}
        inputTaskText={userTaskValue}
        onUserTaskValue={(e) => setUserTaskValue(e.target.value)}
      />
      <hr />
      {tasks.map((task: ITasks) => (
        <Task
          key={task.id}
          task={task.taskText}
          onDeleteTask={() => deleteTask(task.id)}
          onToggleTask={() => toggleTaskCompletion(task.id)}
        />
      ))}
    </>
  );
};
export default App;
