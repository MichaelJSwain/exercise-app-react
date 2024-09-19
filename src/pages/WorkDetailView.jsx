import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingView from "../components/LoadingView";

const WorkoutDetailView = () => {
    const [workout, setWorkout] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();
    console.log("id = ", id);

    const fetchWorkout = async () => {
        fetch(`http://localhost:8080/exerciseApp/api/workouts/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setWorkout(data)
                setIsLoading(false);
            })
            .catch(e => {
                console.log("error fetching workout ", e);
            });
    };

    useEffect(() => {
        fetchWorkout()
    }, []);

    return (
        <>
            {isLoading && <LoadingView />}
            {workout && <h1>{workout.name}</h1>}
        </>
    )
};

export default WorkoutDetailView;