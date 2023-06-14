import React, { useState } from 'react';

function CounterFun(props) {
    const [count,setCount] = useState(0)
    const handlePlasee = () => {
        console.log("jb");
        if(count < 5){
            setCount(count+1)
        }
       
    }
    const handleMinuss = () => {
        console.log("jhvbh");
        if(count > 0){
            setCount(count-1)
        }
    }
    return (
        <div>
            <>
            <p>Counter:{count}</p>
            <button disabled={count < 5 ? false :true} onClick={handlePlasee}>+</button>
            <button disabled={count === 0 ? true : false} onClick={handleMinuss}>-</button>
            </>
        </div>
    );
}

export default CounterFun;