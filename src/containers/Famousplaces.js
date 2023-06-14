import React, { Component } from 'react';

class Famousplaces extends Component {
    render() {
        return (
            <div>
                <h1>Famous Places:</h1>
                <p>{this.props.cname === 'India' ? 'India : Taj Mahal' :'USA : The Statue of Liberty'}</p>
            </div>
        );
    }
}

export default Famousplaces;