import { useEffect, useState } from "react";
import ListView from "../components/ListView/ListView";
import LoadingView from "../components/LoadingView";
import PageHeader from "../components/PageHeader/PageHeader";


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
            <PageHeader title="Workouts" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            {isLoading && <LoadingView />}
            {workouts.length ? <ListView items={workouts}/> : null}
        </>
    )
};

export default WorkoutListView;