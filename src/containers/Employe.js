import React, { Component } from 'react';

class Employe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 101,
            name: "Rutvi",
            age: 23
        }
    }
    handleClick = () => {
        console.log("dfvdg");

        this.setState({
            age:24
        })
    }

    render() {
        return (
            <div>
                <p>Name:{this.state.name}</p>
                <p>Age:{this.state.age}</p>
                <button onClick={this.handleClick}>Change Age</button>
            </div>
        );
    }
}

export default Employe;