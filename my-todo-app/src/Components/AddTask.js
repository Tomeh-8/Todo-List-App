import React, { Component } from 'react'

export class AddTask extends Component {

    
   

    render() {
        return (
            <div>
                <form style = {formStyle} onSubmit = {this.props.submitForm} className= "AddInput">
                    <input style ={inputStyle}
                    type = "text" 
                    placeholder = " Enter Task..." 
                    onChange = {this.props.inputChange}
                    value =  {this.props.task}
                    className= "input"
                    required
                    />
                   
                    <input style ={submitStyle}
                     className= "submit"
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
    marginBottom: "10px"
}

const inputStyle ={
    border: "solid 1px #2f2fa2 ",
    borderRadius:"10px",
    outline: "none",
    color: "#2f2fa2",
    fontFamily: 'sans-serif',
    fontSize: "17px",
    flex: "10",
    width: "100%"
}
const submitStyle ={
    fontFamily: 'sans-serif',
    backgroundColor: "#2f2fa2",
    border: "solid 1px #333",
    borderRadius:"10px",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    padding: "10px",
    outline: "none",
    flex: "1"
}

export default AddTask
