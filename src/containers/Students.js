import React, { Component } from 'react';


const person = [
    {
        name: "Amit",
        age: 25,
    },
    {
        name: "Piyush",
        age: 40,
    }
];

class Students extends Component {
    render() {
        return (
            <div>
            <h1>I am Student Class Base Components</h1> 

            {
                person.map((v,i) => {
                    return (
                        <>
                        <h3>{v.name}</h3>
                        <h4>{v.age}</h4>
                        </>
                        
                    )

                    
                })
            }
        
            </div>
        );
    }
}

export default Students;