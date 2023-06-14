import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    handlePlase = () => {
        console.log("plass");
        this.setState({
            count:this.state.count+1
        })
    }
    handleMinus = () => {
        console.log("minusss");
        this.setState({
            count:this.state.count-1
        })
    }

    render() {
        return (
            <div>
              <>
              <p>{this.state.count}</p>
                <button onClick={this.handlePlase}>+</button>
                <button onClick={this.handleMinus}>-</button>
              </>
            </div>
        );
    }
}

export default Counter;