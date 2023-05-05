import './App.css';
import TaskAdd from './Components/TaskAdd';
import TaskList from './Components/ListTask';
import { Provider } from 'react-redux'
import { store } from './redux'
import TaskLenght from './Components/TaskLenght';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <Provider store = {store}>
          <TaskAdd />
          <div className="bloc">
            <TaskLenght className="mb-4"/>
            <TaskList />
          </div>
        </Provider>
      </div>
  );
}

export default App;