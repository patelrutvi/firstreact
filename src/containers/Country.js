import React, { Component } from 'react';
import Famousplaces from './Famousplaces';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CountryName: 'India'
        }
    }
    handleCountry = () => {
        console.log("ccc");

        this.setState({
            CountryName: 'USA'
        })
    }

    render() {
        return (
            <div>
                <>
                    <h1>Countryes</h1>
                    {/* Famous Places: */}
                    {/* <Famousplaces cname={'uk'} /> */}
                    <Famousplaces cname={this.state.CountryName} />
                    <button onClick={this.handleCountry}>Country Change</button>
                </>
            </div>
        );
    }
}

export default Country;