import React, { useState } from "react";

import { SecondsCounter } from "./SecondsCounter";
import { TimerInput } from "./TimerInput";


export function Timer()
{
    const [TimerStarted, SetTimerStarted] = useState(false);

    const HandleOnTimerStarted = ()=>{
        SetTimerStarted(true);
    }
    const HandleOnTimerFinished = ()=>{
        SetTimerStarted(false);

        alert("Timer has finished.");
    }
    if(TimerStarted == true){
        return (<SecondsCounter OnTimerFinished={HandleOnTimerFinished}/>);
    }

    return (<TimerInput OnTimerStart={HandleOnTimerStarted}/>);
    
}
