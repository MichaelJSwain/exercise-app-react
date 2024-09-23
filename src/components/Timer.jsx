import { useEffect, useState } from "react";

let timerId = null;

const Timer = ({duration, handleTimerComplete}) => {
    const [timerCount, setTimerCount] = useState(duration);
    const [isTimerStarted, setIsTimerStarted] = useState(false);

    const timer = {
        start: function() {
            timerId = setInterval(function() {
                setTimerCount(currVal => currVal - 1);
            }, 1000);
            console.log(timerId);
        },
        pause: () => {
            clearInterval(timerId);
        }
    }

    useEffect(function() {
        if (isTimerStarted) {
            timer.start();
        } else {
            timer.pause();
        }

        return function() {
            timer.pause();
        }
    }, [isTimerStarted]);

    useEffect(() => {
        if (timerCount < 1) {
            timer.pause();
            handleTimerComplete();
        }
    }, [timerCount]);

    return (
        <div>
            <span>{timerCount}</span>
            <button onClick={() => setIsTimerStarted(!isTimerStarted)}>{isTimerStarted ? "Pause" : "Start"}</button>
        </div>
    )
};

export default Timer;