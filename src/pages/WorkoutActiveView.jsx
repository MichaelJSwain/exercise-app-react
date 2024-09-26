import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailViewLayout from "../components/DetailViewLayout/DetailViewLayout";
import DetailViewLayoutItem from "../components/DetailViewLayoutItem/DetailViewLayoutItem";
import WorkoutCompletedView from "./WorkoutCompletedView";
import Timer from "../components/Timer";
import Instructions from "../components/Instructions/Instructions";
import PrimaryButton from "../components/Buttons/PrimaryButton/PrimaryButton";
import Countdown from "../components/Countdown/Countdown";

const WorkoutActiveView = () => {
    const [exercises, setExercises] = useState([]);
    const [index, setIndex] = useState(0);
    const [showingInstructions, setShowingInstructions] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isShowingCountdown, setIsShowingCountdown] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("location = ", location);
        setExercises(location.state.workout.trainingSet);
    }, []);

    const incrementExercise = () => {
        if (index === (exercises.length - 1)) {
            setIsCompleted(true);
        } else {
            setIndex(currVal => currVal + 1)
        }
    };

    const endWorkout = () => {
        navigate("/workouts");
    }

    const toggleInstructions = () => {
        setShowingInstructions(!showingInstructions);
    };

    return (
        <div>
            {isShowingCountdown && 
                <Countdown num="3" handleCountdownFinish={() => {setIsShowingCountdown(false)}} />
            }
            {isCompleted &&
                <WorkoutCompletedView clickFunc={endWorkout}/>
            }
            {(exercises.length && !isCompleted && !isShowingCountdown) ? (
                <DetailViewLayout>
                    <DetailViewLayoutItem>
                        <div style={{width: "100%"}}>
                            <img style={{width: "100%"}} src="https://media.self.com/photos/61bcd0e05aed92fc4251b026/4:3/w_2560%2Cc_limit/GettyImages-1213234926.jpeg"/>
                        </div>
                    </DetailViewLayoutItem>
                    <DetailViewLayoutItem>
                        <div style={{padding: "20px"}}>
                            <h4>{exercises[index].name}</h4>
                            <div>
                                <Timer key={exercises[index]._id} duration={exercises[index].timer} handleTimerComplete={incrementExercise}/>
                                {showingInstructions ? (
                                    <Instructions instructions={exercises[index].instructions} />
                                ): null}
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    {exercises[index].instructions.length ? <button onClick={toggleInstructions}>Instructions</button> : null}
                                    <button onClick={incrementExercise}>Next</button>
                                </div>
                            </div>
                        </div>
                    </DetailViewLayoutItem>
                </DetailViewLayout>
            ): null}
        </div>
    )
};

export default WorkoutActiveView;