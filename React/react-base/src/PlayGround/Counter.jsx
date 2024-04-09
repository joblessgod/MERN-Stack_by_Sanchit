import { useState } from "react";


export default function Counter() {
    /* Array de-structuring */
    const [count, setCount] = useState(0)

    function increase() {
        console.log("Number Increased...");
        
        setCount(count + 1);
        console.log({ count });
    }
    function decrease() {
        console.log("Number decreased...");
        setCount(count - 1);
        console.log({ count });
    }

    console.log("nums rendered");
    return (
        <>
            <h1>Counter Attack</h1>


            <h1>Count : {count}</h1>
            <button onClick={increase} className="btn">Increase</button>
            <button onClick={decrease} className="btn">Increase</button>
        </>
    )
}