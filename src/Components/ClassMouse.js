import React, { Component } from 'react'

export default class ClassMouse extends Component {
    constructor(props){
        super(props)
        this.state ={
            x: 0,
            y: 0
        }
    }
    logMousePoistion = e =>{
        this.setState({x: e.clientX, y: e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePoistion)
    }
    componentDidUnMount(){
      window.removeEventListener('mousemove', this.logMousePoistion)
    }
    

  render() {
    return (
      <div>
          x- {this.state.x}  Y - {this.state.y}
      </div>
    )
  }
}
