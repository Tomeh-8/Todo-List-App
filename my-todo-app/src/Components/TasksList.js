import React, { Component } from 'react'


export class TasksList extends Component {

    TrackListStyle = () => {
        return {
            backgroundColor:"transparent",
            borderBottom: "solid 1px brown",
            padding: "10px",
            color: "grey",
            textDecoration: this.props.todo.completed? "line-through" : "none"
        }
        
    }

    render() {
        return (
            <div style = {this.TrackListStyle()}>
                <h3><input type="checkbox"/> {"  "}{this.props.todo.task}</h3>
            </div>
        )
    }
}

export default TasksList
