import React, { useState, useEffect } from "react";

const Timer = ({ handleTimer = () => {}, id = '', demoTime = '' }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [hideTimer, setHideTimer] = useState(false);
  let hours = ("00" + Math.floor((time / (60000 * 60)) % 24)).slice(-2);
  let min = ("00" + Math.floor((time / 60000) % 60)).slice(-2);
  let sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let timeZone = hours === '00' ? `${min} min ${sec} seconds` : `${hours} hour ${min} min ${sec} seconds`
  if (min === "00") {
    timeZone = `${sec} seconds`
  } 
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  const clickHandler = () =>{
    console.log('id>>>>>>', id)
    handleTimer(timeZone, id)
      setHideTimer(true)
      setRunning(false)
  }
  return (
    <div className="stopwatch">
      <div className="numbers">
      <span >
      {demoTime ? demoTime : hours + ':' + min + ":" + sec}
    </span>
    
      </div>
      <div className="buttons">
      {!hideTimer && !demoTime && <> <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={clickHandler}>End</button> </>}
      </div>
    </div>
  );
};

export default Timer;