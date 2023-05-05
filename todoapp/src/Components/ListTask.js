import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskList() {
  const tasks = useSelector(state => state.todo)
  const [filter, setFilter] = useState("tout");

  const filteredTasks =
    filter === "fait"
      ? tasks.filter((task) => task.done)
      : filter === "nonFait"
      ? tasks.filter((task) => !task.done)
      : tasks;
  return (
    <div>
      <div className='mt-4 border border-white' style={{width:'450px', padding:'10px', margin:'0px auto'}}>
        <h5 className='mb-4'>Filtres</h5>
        <div className="buttonFilters mb-3">
          <button onClick={() => setFilter("tout")} className='btn btn-outline-primary'>ALL</button>
          <button onClick={() => setFilter("fait")} className='btn btn-outline-success mx-3'>Done</button>
          <button onClick={() => setFilter("nonFait")} className='btn btn-outline-danger'>TO DO</button>
        </div>
      </div>
      {filteredTasks.map((t) => (
      <TaskItem
        task = {t}
        key = {t.id}
      />)
      )}
    </div>
  )
}

export default TaskList