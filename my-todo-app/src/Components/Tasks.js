import React, { Component } from 'react'
import TasksList from "./TasksList.js";

export class Tasks extends Component {
    state = {
        tasks: [
            {
               id: 1,
               completed: false,
               task: "visit a friend" 
            },
            {
                id: 2,
                completed: true,
                task: "eat a meal" 
             },
             {
                id: 3,
                completed: false,
                task: "see a movie" 
             }
        ]
    }
    render() {
        return this.state.tasks.map((todo) => {
            return <h2><TasksList key={todo.id} todo={todo} /></h2>
        });
    }
}



export default Tasks
