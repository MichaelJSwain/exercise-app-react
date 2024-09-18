import { useEffect, useState } from "react";
import ListView from "../components/ListView";

const baseUrl = "http://localhost:8080/exerciseApp/api";

const WorkoutListView = () => {
    const [workouts, setWorkouts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const fetchWorkouts = async () => {
        console.log("fetching");
        fetch(`${baseUrl}/workouts`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setWorkouts(data);
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
            {workouts.length ? <ListView items={workouts}/> : null}
        </>
    )
};

export default WorkoutListView;