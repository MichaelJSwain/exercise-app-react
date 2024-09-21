import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LoadingView from "../components/LoadingView";
import DetailViewLayout from "../components/DetailViewLayout/DetailViewLayout";
import PageTitle from "../components/PageTitle/PageTitle";
import GoalLabel from "../components/GoalLabel/GoalLabel";
import DetailViewLayoutItem from "../components/DetailViewLayoutItem/DetailViewLayoutItem";
import ListItem from "../components/ListItem/ListItem";

const WorkoutDetailView = () => {
    const [workout, setWorkout] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let location = useLocation();

    useEffect(() => {
        setWorkout(location.state.workout);
        setIsLoading(false);
    }, []);

    return (
        <DetailViewLayout>
            <DetailViewLayoutItem>
                <div style={{width: "100%"}}>
                    {workout && <img style={{width: "100%"}} src={workout.image}/>}
                </div>
            </DetailViewLayoutItem>
            <DetailViewLayoutItem>
                {workout && (
                    <div style={{padding: "20px"}}>
                        <PageTitle title={workout.name} />
                        <p>{workout.description}</p>

                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            {workout.goals.map(goal => {
                                return <GoalLabel key={goal} text={goal}/>
                            })}
                        </div>

                        <div>
                            {workout.trainingSet.map(exercise => {
                                return (
                                    <ListItem key={exercise._id} item={exercise} />
                                )
                            })}
                        </div>
                    </div>
                )
                }
            </DetailViewLayoutItem>
        </DetailViewLayout>
    )
};

export default WorkoutDetailView;