import React, { Component } from 'react'


export class TasksList extends Component {

    TrackListStyle = () => {
        return {
            backgroundColor:"#2f2fa2",
            border: "solid 1px #242582",
            borderRadius: "5px",
            height: "50px",
            padding: "10px",
            marginBottom: "4px",
            color: "#fff",
            fontSize: "18px",
            textDecoration: this.props.todo.completed? "line-through" : "none"
        }
        
    }
    render() {
        const {id,task} = this.props.todo;
        return (
            <div>
                <div style = {this.TrackListStyle()}>
                <p><input style = {styleCheck} type="checkbox" onChange = {this.props.changeCompleted.bind(this,id)} />
                 {"  "}
                 {task}
                  <button style = {styleButton} onClick = {this.props.delTask.bind(this,id)}>x</button></p>
                 </div>
            </div>
        )
    }
}

const styleButton = {
    fontSize: "20px",
    height: "30px",
    width: "30px",
    float: "right",
    cursor: "pointer",
    backgroundColor: "#2f2582",
    borderRadius: "50%",
    outline: "none",
    border: "none",
    color: "#f64c72"
}

const styleCheck = {
 cursor: "pointer"
}

export default TasksList
