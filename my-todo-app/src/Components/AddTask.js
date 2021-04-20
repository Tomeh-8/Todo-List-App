import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
        task: ""
    }

    inputChange = (e) => {
        return this.setState({task: e.target.value});
    }

    submitForm = (e) => {
         e.preventDefault();
        if(this.state.task !== "")  {this.props.addTask(this.state.task);
         this.setState({task: ""});
        }
    }

    render() {
        return (
            <div>
                <form style = {formStyle} onSubmit = {this.submitForm}>
                    <input style ={inputStyle}
                    type = "text" 
                    placeholder = " Enter Task..." 
                    onChange = {this.inputChange}
                    addTask = {this.addTask}
                    value = {this.state.task}
                    />
                   
                    <input style ={submitStyle}
                     type="submit"
                     value = "Add Task"/>
                </form>
            </div>
        )
    }
}

const formStyle = {
    display: "flex",
    height: "40px",
    marginBottom: "10px",
    justifyContent: "space-between"
}

const inputStyle ={
    flexBasis: "79%",
    border: "solid 1px #2f2fa2 ",
    borderRadius:"10px",
    outline: "none",
    color: "#2f2fa2",
    fontFamily: 'sans-serif',
    fontSize: "15px"
}
const submitStyle ={
    flexBasis: "20%",
    fontFamily: 'sans-serif',
    backgroundColor: "#2f2fa2",
    border: "solid 1px #333",
    borderRadius:"10px",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    padding: "10px",
    outline: "none"
}

export default AddTask
