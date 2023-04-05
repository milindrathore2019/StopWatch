import React,{useState} from "react";
import Buttons from "../Components/Buttons";



function StopWatch(){

const [isActive,setIsActive]=useState(false);
const [time,setTime]=useState(0);

React.useEffect(()=>{
    let interval;

    if (isActive){
        interval=setInterval( ()=>{
            setTime(time+1)
        },10);
    }
    return()=>{ 
        clearInterval(interval);
    };
},[isActive,time]
);

const hours=Math.floor(time/360000);
const millsecond=time%100;
const minutes =Math.floor((time%360000)/6000);

const second=Math.floor((time%6000)/100);

const startandstop=()=>{
    setIsActive(!isActive);
};

const split=()=>{
    setTime(time);
    debugger;
}
const reset= ()=>{
    setIsActive(!isActive);
    setTime(0);
};

return(
    <div className="stop-watch">
       
        <p className=" stopwatch-timer">
            {hours}:{minutes.toString().padStart(2, '0')}:
            {second.toString().padStart(2, '0')}:
            {millsecond.toString().padStart(2, '0')}
        </p>
        <div className="stopwatch-button">
            <button className="stopwatch-button" onClick={startandstop}>
                {isActive ?"stop": "start"}
            </button>
            <button className="stopwatch-button" onClick={(split)}>
                split
            </button>
            <button className="stopwatch-button" onClick={(reset)}>
                Reset
            </button>
            <li>
                {time}
            </li>

        </div>
        

    </div>
)

}
export default StopWatch;