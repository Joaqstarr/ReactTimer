import React, { useState, useEffect, useRef } from "react";

function SecondsCounterView({seconds}){
    let secondsAsString = seconds.toString().padStart(6, "0")

    return (<div class="flex flex-row p-10 bg-gray-800 w-full justify-around">
        
        <DigitView number = {secondsAsString.charAt(0)}/>
        <DigitView number = {secondsAsString.charAt(1)}/>
        <DigitView number = {secondsAsString.charAt(2)}/>
        <DigitView number = {secondsAsString.charAt(3)}/>
        <DigitView number = {secondsAsString.charAt(4)}/>
        <DigitView number = {secondsAsString.charAt(5)}/>
        
    </div>);
}

function DigitView({number}){
    return (
        <div>
            <h1 class="text-slate-100 text-8xl">{number}</h1>
        </div>
    )
}
export function SecondsCounter({OnTimerFinished}){
    let [count, setCount] = useState(timer);

    useInterval(() => {
      setCount(count - 1);
    }, 1000);   
    if(count < 0){
      OnTimerFinished();
    }
    return (
        <SecondsCounterView seconds={count}/>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  let timer = 0;

  export function StartTimer(newTime){
    timer = newTime;
  }