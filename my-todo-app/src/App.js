import React, {Component} from "react";
import './App.css';
import Tasks from "./Components/Tasks.js";
import Header from "./Components/Header.js";
import AddTask from "./Components/AddTask.js"
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
    ]
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

  addTask = (task) => {
    const newTask = {
       id: uuidv4(),
       task: task,
       completed: false
    }
    this.setState({tasks: [...this.state.tasks, newTask]});
}

  render() {
    return (
      <div className="App">
         <Header />
         <AddTask addTask = {this.addTask}/>
         <Tasks  tasks = {this.state.tasks}
         changeCompleted = {this.changeCompleted}
         delTask = {this.delTask}
         />
      </div>
    );
  }
}

export default App;
