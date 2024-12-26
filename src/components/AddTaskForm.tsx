// import React from 'react';
import React from 'react';

interface Props {
  onAddTaskForm: (e: React.FormEvent) => void;
  inputTaskText: string;
  onUserTaskValue: React.ChangeEventHandler<HTMLInputElement>
}

const AddTaskForm: React.FC<Props> = ({onAddTaskForm, inputTaskText, onUserTaskValue}) => {
  return (
    <form onSubmit={onAddTaskForm}>
      <input type='text' value={inputTaskText} onChange={onUserTaskValue} placeholder='Add new task'/>
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddTaskForm;