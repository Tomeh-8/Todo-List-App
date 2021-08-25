import React, { Component } from 'react'


export class TasksList extends Component {

    TrackListStyle = () => {
        return {
            backgroundColor:"#2f2fa2",
            border: "solid 1px #242582",
            borderRadius: "5px",
            minHeight: "50px",
            padding: "10px",
            marginBottom: "4px",
            color: "#fff",
            fontSize: "18px",
            textDecoration: this.props.todo.completed? "line-through" : "none",
            overflow: "hidden"
        }
        
    }
    render() {
        const {id,task} = this.props.todo;
        return (
            <div>
                <div style = {this.TrackListStyle()}>
                <p><input style = {styleCheck} type="checkbox" onChange = {this.props.changeCompleted.bind(this,id)}  required/>
                 {"  "}
                 <span style = {styleText}>{task}</span>
                  <div style = {styleItem}>
                  <button style = {styleDelete} onClick = {this.props.delTask.bind(this,id)}>
                      <i className="fa fa-trash"></i></button>
                  <button style = {styleEdit} onClick = {this.props.editTask.bind(this,id)}>
                  <i className="fa fa-pencil" ></i>
                  </button>
                  </div>
                  </p>
                 </div>
            </div>
        )
    }
}

const styleItem = {
    float:"right"
}

const styleDelete = {
    fontSize: "20px",
    height: "30px",
    width: "30px",
    cursor: "pointer",
    backgroundColor: "#2f2582",
    borderRadius: "50%",
    outline: "none",
    border: "none",
    color: "#f64c72",
}

const styleEdit = {
    fontSize: "20px",
    height: "30px",
    width: "30px",
    cursor: "pointer",
    backgroundColor: "#2f2582",
    borderRadius: "50%",
    outline: "none",
    border: "none",
    color: "yellow",
}

const styleCheck = {
 cursor: "pointer"
}

const styleText = {
    overflow: "hidden"
}

export default TasksList
