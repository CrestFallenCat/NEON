import { useState, useEffect } from "react";

export function Timer({ startTimer }) {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (startTimer && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTimer, seconds]);

  return <div>Countdown: {seconds} </div>;
}

export default Timer;
