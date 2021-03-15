import logo from './logo.svg';
import './App.css';
import Task from './component/task/Task'
import TaskForm from './component/taskForm/TaskForm'

function App() {
  const steps=['enter a task title', 'click on the button']
  const loading=false
  return (
    <div className="tasks-list" style={{ color:'blue'}}>
      <ul>
      {steps.map(step=><li>{step}</li>
      )}
      </ul>
      {/* {loading?(<div> loading... </div>
      ):( */ loading && <div> loading..</div>
      }
      {!loading &&(<>
      <TaskForm />
      <Task title="learn Html" duration={60} details={{type: "Basic", date: "15/02/2002"}} />
      <Task title="learn Java" duration={30} details={{type: "IT", date: "15/02/2002"}}/>
      <Task title="learn React" duration={15} details={{type: "IT", date: "15/02/2002"}}/></>)}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
