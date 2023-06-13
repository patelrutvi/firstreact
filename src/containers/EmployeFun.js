import React, { useState } from 'react';

function EmployeFun(props) {
    let [name,setName] = useState("rutvi")
    let [age,setAge] = useState(23)

    const handleAge = () => {
        setAge(24)
    }
    return (
        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <button onClick={handleAge}>Change Age</button>
        </div>
    );
}

export default EmployeFun;