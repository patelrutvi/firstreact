import React from 'react';

const person = [
    {
        name: "Amit",
        age: 25,
        course: [
            "c",
            "html"
        ]
    }
]

const myObj = [
    {
        name: "jd",
        age: 20,
        cars: {
            car1: "ford",
            car2: "breza",
            car3: "BMW"
        },
    },
    {
        name: "jd",
        age: 20,
        cars: {
            car1: "ford",
            car2: "breza",
            car3: "BMW"
        },
    },
    {
        name: "jd",
        age: 20,
        cars: {
            car1: "ford",
            car2: "breza",
            car3: "BMW"
        }
    }
    
]

function StudentsFun(props) {
    return (
        <div>
            <h1>I am Student Fuction Base Components</h1>

            {
                person.map((v, i) => {
                    return (
                        <>
                            <h3>{v.name}</h3>
                            <h3>{v.age}</h3>

                            {
                                v.course.map((k, j) => {
                                    return (
                                        <>
                                            <h3>{k}</h3>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
            {
                myObj.map((a) => {
                   return (
                    <>
                    <h3>{a.name}</h3>
                    <h3>{a.age}</h3>
                    <h3>{a.cars.car1}</h3>
                    <h3>{a.cars.car2}</h3>
                    <h3>{a.cars.car3}</h3>
                   
                    </>
                   )
                })
            }
        </div>
    );
}

export default StudentsFun;