import React, { Component } from 'react';

class Course extends Component {
   constructor(props) {
    super(props);
    this.state = {
        id: 101,
        name: "Rutvi",
        age: 23,
        course:"React"
    }
   }
   
   handleCourse = () => {
    console.log("hjkbjh");
    this.setState({
        course:"Master In React Devloper"
    })
   }
   
    render() {
        return (
            <div>
                <h3>Name:{this.state.name}</h3>
                <h3>Age:{this.state.age}</h3>
                <h3>Course:{this.state.course}</h3>
                <button onClick={this.handleCourse}>change course</button>
            </div>
        );
    }
}

export default Course;