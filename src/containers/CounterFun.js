import React, { useState } from 'react';

function CounterFun(props) {
    const [count,setCount] = useState(0)
    const handlePlasee = () => {
        console.log("jb");
        setCount(count+1)
    }
    const handleMinuss = () => {
        console.log("jhvbh");
        setCount(count-1)
    }
    return (
        <div>
            <>
            <p>{count}</p>
            <button onClick={handlePlasee}>+</button>
            <button onClick={handleMinuss}>-</button>
            </>
        </div>
    );
}

export default CounterFun;