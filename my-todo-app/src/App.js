import React, {Component} from "react";
import './App.css';
import Tasks from "./Components/Tasks";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask"
import {v4 as uuidv4} from "uuid";

class App extends Component {

  state = {
    tasks: [
        {
           id: uuidv4(),
           completed: false,
           task: "visit a friend" 
        },
        {
            id: uuidv4(),
            completed: false,
            task: "eat a meal" 
         },
         {
            id: uuidv4(),
            completed: false,
            task: "see a movie" 
         }
    ],

    task: "",

    editedTask: null
}

changeCompleted = (id) => {  
    this.setState({tasks: this.state.tasks.map(task => {
        if(task.id === id){
            task.completed = !task.completed
        }
        return task;
    })});
  }

  delTask = (id) => {
   this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
  }
  
  editTask = (id) => {
    const todo = this.state.tasks.find((task) => task.id === id);
    this.setState({editedTask:todo});
    this.setState({task: todo.task});
 }
  
  addTask = (task) => {
    const newTask = {
       id: uuidv4(),
       task: task,
       completed: false
    }
    this.setState({tasks: [...this.state.tasks, newTask]});
}

inputChange = (e) => {
  return this.setState({task: e.target.value});
}

submitForm = (e) => {
   e.preventDefault();
  if(this.state.editedTask === null) {
    this.addTask(this.state.task);
    this.setState({task: ""});
  }else{
  this.state.editedTask.task = this.state.task;
  this.setState({tasks: [...this.state.tasks]});
  this.setState({task: "", editedTask: null});}
}


  render() {
    return (
      <div className="App">
         <div>
           <Header />
         </div>
         <div>
         <AddTask addTask = {this.addTask}
         tasks = {this.state.tasks}
         task = {this.state.task}
         taskInput = {this.task}
         getTask = {this.getTask}
         submitForm = {this.submitForm}
         inputChange = {this.inputChange}
         />
         </div>
         <div>
         <Tasks  tasks = {this.state.tasks}
         changeCompleted = {this.changeCompleted}
         delTask = {this.delTask}
         editTask = {this.editTask}
         />
         </div>
      </div>
    );
  }
}

export default App;
