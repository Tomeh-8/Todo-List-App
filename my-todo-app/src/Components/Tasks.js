import React, { Component } from 'react'
import TasksList from "./TasksList.js";



export class Tasks extends Component {
    render() {
             return this.props.tasks.map((todo) => {
             return <h3><TasksList key={todo.id}
               todo={todo}
               changeCompleted = {this.props.changeCompleted}
               delTask = {this.props.delTask}
               editTask = {this.props.editTask}
               /></h3>
        });
    }
}



export default Tasks
