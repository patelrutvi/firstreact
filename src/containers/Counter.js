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

        if(this.state.count < 5){
            this.setState({
                count:this.state.count+1
            })
        }
       
    }
    handleMinus = () => {
        console.log("minusss");
        if(this.state.count > 0){
            this.setState({
                count:this.state.count-1
            })
        }
       
    }

    render() {
        return (
            <div>
              <>
              <p>Counter:{this.state.count}</p>
                <button disabled={this.state.count < 5 ? false : true} onClick={this.handlePlase}>+</button>
                <button disabled={this.state.count === 0 ? true : false} onClick={this.handleMinus}>-</button>
              </>
            </div>
        );
    }
}

export default Counter;