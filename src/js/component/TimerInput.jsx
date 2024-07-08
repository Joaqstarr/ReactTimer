import React, { useState } from "react";

import { StartTimer } from "./SecondsCounter";


export function TimerInput({OnTimerStart}){
    const HandleTimerStart = () =>{
        OnTimerStart();
        StartTimerButtonClicked();
    }

    return (
        <div class="flex flex-row p-10 bg-gray-800 w-full justify-center space-x-6 items-center">
            <NumberInputField/>
            <Button name="Set Timer" callback={HandleTimerStart}/>

        </div>
    )
}

function StartTimerButtonClicked(){
    console.log(timer);
    StartTimer(timer);
}

function Button({name, callback}){
    return (
        <button onClick={callback} class="ease-in duration-100 p-3 rounded bg-gray-200 hover:shawdows-2xl hover:bg-gray-300 hover:rounded-2xl hover:animate-pulse active:bg-gray-500">
            <p>{name}</p>
        </button>
    )
}

function NumberInputField(){
    return (
        <div class=" rounded">
            <input type="number" class="rounded py-1 px-2 w-36 text-center appearance-none text-3xl" max="999999" min="0" onKeyUp={enforceMinMax} />
        </div>
    )
}

function enforceMinMax(el) {
    el=el.target;
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
    timer = el.value;
  }
  let timer = 0;