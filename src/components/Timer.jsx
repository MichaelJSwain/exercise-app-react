import { useEffect, useState } from "react";
import SecondaryButton from "./Buttons/PrimaryButton/SecondaryButton";

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
        <div style={{display: "flex", justifyContent: "end", width: "100%", alignItems: "center"}}>
            <div style={{width: "100%"}}>
                <h1>{timerCount}</h1>
            </div>
            <div style={{position: "absolute"}}>
                <SecondaryButton text={isTimerStarted ? "Pause" : "Start"} clickFunc={() => setIsTimerStarted(!isTimerStarted)}/>
            </div>
        </div>
    )
};

export default Timer;