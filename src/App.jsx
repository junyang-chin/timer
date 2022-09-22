import { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/timer/Display";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  // useState
  const [timerState, setTimerState] = useState(false);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(59);

  // useEffect
  useEffect(() => {
    if (seconds == 0) {
      setMinutes(minutes - 1);
    }
    console.log("effect minutes -1");
  }, [seconds]);
  useEffect(() => {
    if (minutes == 0) {
      setHours(hours - 1);
    }
    console.log("effect hour -1");
  }, [minutes]);

  //onSubmit
  function handleSubmit(event) {
    event.preventDefault();
    setHours(Number(event.target[0].value));
    setMinutes(Number(event.target[1].value));
    setSeconds(Number(event.target[2].value));
  }

  function handleStart(event) {
    event.preventDefault();
    setTimerState(true);
    console.log(timerState);
  }

  return (
    <section id="main" className="full-width flex-col align-center">
      <div className="flex-col align-center justify-sb" id="timerBody">
        <div className="flex-row align-center gap-5">
          <Display children={hours}></Display>
          <Display children={minutes}></Display>
          <Display children={seconds}></Display>
        </div>

        <div>
          <form
            id="setTimer"
            className="flex-row align-center gap-5"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <Input id="hours" min="0" max="59"></Input>
            <Input id="minutes" min="0" max="59"></Input>
            <Input id="seconds" min="0" max="59"></Input>
            <Button children="Submit" size="medium"></Button>
          </form>
          <Button
            children="Start"
            size="medium"
            onClick={(event) => {
              handleStart(event);
            }}
          ></Button>
        </div>
      </div>
    </section>
  );
}

export default App;
