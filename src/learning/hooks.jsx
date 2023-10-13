import React, { useState, useEffect } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);
    console.log(count);

    useEffect(()=> {
        console.log("useEffect");
    },[count]);

    return (
        <>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>クリック</button>
        </>
    );
}

export default Hooks;
