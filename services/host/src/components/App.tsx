import { useEffect, useState } from 'react';
import classes from "./App.module.scss";
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (isRunning) {
      let timerId = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning(!isRunning);
  }

  return (
    <div data-testid={"App.DataTestId"} >
      <h1 data-testid={"Platform"} >__PLATFORM__={__PLATFORM__}</h1>
      <div className={classes.links} >
        <Link to={"/about"}>about</Link>
        <br />
        <Link to={"/shop"}>shop</Link>
      </div>
      <div>
        <div className={classes.counter}>
          <span>{counter}</span>
          <button className={classes.button} onClick={handleClick}>
            <span>Start/Stop</span>
          </button>
        </div>
        <div >{isRunning ? "Started" : "Stopped"}</div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;