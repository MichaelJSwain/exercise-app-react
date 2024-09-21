import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LoadingView from "../components/LoadingView";

const WorkoutDetailView = () => {
    const [workout, setWorkout] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let location = useLocation();

    useEffect(() => {
        setWorkout(location.state.workout);
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading && <LoadingView />}
            {workout && <h1>{workout.name}</h1>}
        </>
    )
};

export default WorkoutDetailView;