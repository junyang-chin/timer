import { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/timer/Display";
import Input from "./components/Input";
import Button from "./components/Button";

// add leading zeroes to integers to the Number class
Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

function App() {
  // useState
  const [timerState, setTimerState] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  // useEffect
  useEffect(() => {
    if (seconds <= -1) {
      setMinutes((prevMin) => prevMin - 1);
      setSeconds(59);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes <= -1) {
      setHours((prevHour) => prevHour - 1);
      setMinutes(59);
    }
  }, [minutes]);

  useEffect(() => {
    if (hours < 0) {
      alert("Timer Ended!");
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setTimerState(false);
    }
  }, [hours]);

  useEffect(() => {
    if (timerState) {
      let Id = setInterval(() => {
        setSeconds((prevSec) => prevSec - 1);
      }, 1000);
      // set intervalId
      setIntervalId(Id);
    } else {
      // reset the interval
      clearInterval(intervalId);
    }
  }, [timerState]);

  // events
  // set timer
  function handleSubmit(event) {
    event.preventDefault();
    setHours(Number(event.target[0].value));
    setMinutes(Number(event.target[1].value));
    setSeconds(Number(event.target[2].value));
  }

  // start/pause timer
  function handleStart(event) {
    event.preventDefault();
    setTimerState((prevState) => !prevState);
  }

  // disable/enable button
  function handleButtonState() {
    return hours + minutes + seconds === 0 ? true : false;
  }
  return (
    <section
      id="main"
      className="full-width flex-col align-center justify-center gap-5"
    >
      <div className="flex-col align-center justify-sb" id="timerBody">
        <div className="flex-row align-center gap-5">
          <Display children={hours.pad(2)}></Display>
          <Display children={minutes.pad(2)}></Display>
          <Display children={seconds.pad(2)}></Display>
        </div>

        <Button
          children="Start/Pause"
          size="medium"
          onClick={(event) => {
            handleStart(event);
          }}
          className="hover-invert"
          disabled={hours + minutes + seconds === 0}
        ></Button>
      </div>

      <form
        id="setTimer"
        className="flex-row align-center gap-5"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Input id="hours" size="medium" min="0" max="59"></Input>
        <Input id="minutes" size="medium" min="0" max="59"></Input>
        <Input id="seconds" size="medium" min="0" max="59"></Input>
        <Button id="set" children="Set" size="medium"></Button>
      </form>
    </section>
  );
}

export default App;
