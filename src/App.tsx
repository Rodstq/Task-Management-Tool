import './App.css';
import { useState } from 'react';

function App() {

const [todoList, setTodoList] = useState([]);
const [tasksDone, setTaskDone] = useState([]);

const addTask = (event : any) =>{
  const taskValueInput = event.target.previousSibling.value;
  const newTodoList :  any = [...todoList, taskValueInput];
  setTodoList(newTodoList);
  event.target.previousSibling.value = "";
}

const completeTask = (event : any) =>{

  const element : string = event.target.parentElement.querySelector("#taskDone").innerHTML
  console.log(element);
  const position = checkPosition(todoList, element);
  if(position !=undefined){
    todoList.splice(position, 1); 
  };
  const doneTask = element;
  const tasksDoneList : any = [...tasksDone, doneTask];
  setTaskDone(tasksDoneList);
};

const checkPosition = (array : any , element : String) =>{  
  for (let i : number = 0; i < array.length; i++){
    if (array[i] === element){
      return i ;
    }
  }
  return -1;
}

  return ( 
  <section id = "displayer">
    <div id="made-tasks-title">
      <h1> Tasks Done </h1>   
        {tasksDone.map((task)=>{
          return <div className="task done"> 
          <p>{task}</p>
        </div>
        })}
    </div>

    <div id="to-do-tasks-title">
      <h1> To Do Tasks </h1>
      <div id="to-do-tasks">
      {todoList.map((task) => {
        if(task != "" && task != undefined){
          return  <div className="task todo">
                    <p id="taskDone">{task}</p>
                    <input type="checkbox" onClick={completeTask}></input>
                  </div> 
        }        
      } )}
      </div>
    </div>

    <div id="add-tasks-title">
      <h1> Add Task </h1>
      <label htmlFor="textInput"></label>
      <input type="text" id="textInput" ></input>
      <button id="addtask" onClick={addTask} > add task </button>
    </div>
  </section>  
  );
}
export default App;