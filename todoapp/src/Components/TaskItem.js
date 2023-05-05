import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function TaskItem(props) {
  const { task } = props;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text }));
    setIsEditing(false);
    };

  return (
    <div className='d-flex justify-content-evenly mt-4 p-3' style={{width:'700px', margin:'0px auto', backgroundColor:'#ADD8E6', borderRadius:'25px'}}>
       {isEditing ? (
        <form onSubmit={handleSave} className='d-flex'>
          <input type="text" value={text} onChange={e => setText(e.target.value)} className='form-control'/>
          <button type="submit" className='btn btn-success' style={{ marginLeft:'10px'}}>Enregistrer</button>
        </form>
        ) : (
        <>
          <input 
            type="checkbox"
            checked= {task.done}
            onChange= {() => dispatch(toggleTask(task.id))}
          />
          <span className='taskName' style={{width: '200px'}}> {task.text} </span>
          <button onClick={() => dispatch(deleteTask(task.id))} className="btn btn-danger ml-2" >Supprimer</button>
          <button onClick={() => setIsEditing(true)} className="btn btn-success ml-2">Edit</button>
        </>
        )}
    </div>
  )
}

export default TaskItem