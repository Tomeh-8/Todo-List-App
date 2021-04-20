import React, { Component } from 'react'

export class Header extends Component {
    
    render() {
        return (
            <div style= {useStyle}>
                <h1>My Todo List</h1>
            </div>
        )
    }
}
const useStyle = {
    color: "#f64c72",
    textAlign: "center",
    padding: "10px"
  }

export default Header
