import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../App.css'
import { addTask } from '../redux'


function TaskAdd() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(addTask(text));
      setText("");
  };
  return (
    <div className='add'>
      <h3 className="title">Todo App</h3>
        <form className='addForm d-flex justify-content-center' onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add New Task"
            style={{borderRadius:'7px'}}
            className='form-control'

          />
        </form>
    </div>
  )
}

export default TaskAdd