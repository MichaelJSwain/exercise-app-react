import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const WorkoutActiveView = () => {
    const [exercises, setExercises] = useState([]);
    const [index, setIndex] = useState(0);
    const location = useLocation();

    useEffect(() => {
        console.log("location = ", location);
        setExercises(location.state.workout.trainingSet)
    }, []);

    const incrementExercise = () => {
        if (index === (exercises.length - 1)) {
            console.log("workout completed!!");
        } else {
            setIndex(currVal => currVal + 1)
        }
    }

    return (
        <div>
            {exercises.length ? (
                <>
                <h1>{exercises[index].name}</h1>
                <button onClick={incrementExercise}>Next</button>
                </>
            ): null}
        </div>
    )
};

export default WorkoutActiveView;