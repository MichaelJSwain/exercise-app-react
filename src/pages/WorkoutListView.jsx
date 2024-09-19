import { useEffect, useState } from "react";
import ListView from "../components/ListView";
import LoadingView from "../components/LoadingView";


const baseUrl = "http://localhost:8080/exerciseApp/api";

const WorkoutListView = () => {
    const [workouts, setWorkouts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchWorkouts = async () => {
        fetch(`${baseUrl}/workouts`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setWorkouts(data);
                setIsLoading(false);
            })
            .catch(e => {
                console.log("error fetching = ", e);
            });
    }

    useEffect(() => {
        fetchWorkouts();
    }, []);

    return (
        <>
            <h1>Workout list view</h1>
            {isLoading && <LoadingView />}
            {workouts.length ? <ListView items={workouts}/> : null}
        </>
    )
};

export default WorkoutListView;