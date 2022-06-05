import React, { useState } from "react";
import {useStopwatch, useTimer} from 'react-timer-hook';

function Counter(){

    var [count, setState] = useState(0);

    function start(){
        console.log("clicked");
        setState(count+1);

    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={start}>+</button>
        </div>
    )
}

export default Counter;