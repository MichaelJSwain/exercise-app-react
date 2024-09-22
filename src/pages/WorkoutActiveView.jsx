import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailViewLayout from "../components/DetailViewLayout/DetailViewLayout";
import DetailViewLayoutItem from "../components/DetailViewLayoutItem/DetailViewLayoutItem";
import WorkoutCompletedView from "./WorkoutCompletedView";

const WorkoutActiveView = () => {
    const [exercises, setExercises] = useState([]);
    const [index, setIndex] = useState(0);
    const [showingInstructions, setShowingInstructions] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("location = ", location);
        setExercises(location.state.workout.trainingSet)
    }, []);

    const incrementExercise = () => {
        if (index === (exercises.length - 1)) {
            console.log("workout completed!!");
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
            {isCompleted ? (
                <WorkoutCompletedView clickFunc={endWorkout}/>
            ) : null}
            {exercises.length && !isCompleted ? (
                <DetailViewLayout>
                    <DetailViewLayoutItem>
                        <div style={{width: "100%"}}>
                            <img style={{width: "100%"}} src="https://media.self.com/photos/61bcd0e05aed92fc4251b026/4:3/w_2560%2Cc_limit/GettyImages-1213234926.jpeg"/>
                        </div>
                    </DetailViewLayoutItem>
                    <DetailViewLayoutItem>
                        <h1>{exercises[index].name}</h1>
                        <div>
                            {showingInstructions ? (
                                <ul>
                                    {exercises[index].instructions.map(instruction => {
                                        return <li>{instruction}</li>
                                    })}
                                </ul>
                            ): <h2>{exercises[index].timer} sec</h2>}
                            
                            <button onClick={incrementExercise}>Next</button>
                            {exercises[index].instructions.length ? <button onClick={toggleInstructions}>Instructions</button> : null}
                            
                        </div>
                    </DetailViewLayoutItem>
                </DetailViewLayout>
            ): null}
        </div>
    )
};

export default WorkoutActiveView;