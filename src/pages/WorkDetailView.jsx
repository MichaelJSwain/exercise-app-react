import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LoadingView from "../components/LoadingView";
import DetailViewLayout from "../components/DetailViewLayout/DetailViewLayout";
import GoalLabel from "../components/GoalLabel/GoalLabel";
import DetailViewLayoutItem from "../components/DetailViewLayoutItem/DetailViewLayoutItem";
import ListItem from "../components/ListItem/ListItem";
import HighlightList from "../components/HighlightList";
import PageHeader from "../components/PageHeader/PageHeader";

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
                        <HighlightList duration={workout.duration} level={workout.difficulty} calories="23" />
                        <PageHeader title={workout.name} description={workout.description}/>
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