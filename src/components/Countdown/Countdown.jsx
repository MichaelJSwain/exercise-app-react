import { useEffect, useState } from "react"

let countdownInterval;

const Countdown = ({num, handleCountdownFinish}) => {
    const [count, setCount] = useState(num);

    const handleCountdown = () => {
        countdownInterval = setInterval(() => {
            console.log("counting down ", count);
            setCount(currVal => {return currVal - 1});
        }, 1000);
    }

    useEffect(() => {
        handleCountdown();

        return () => {
            clearInterval(countdownInterval);
        }
    }, []);

    useEffect(() => {
        if (count === 0) {
            clearInterval(countdownInterval);
            handleCountdownFinish();
        }
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
};

export default Countdown;