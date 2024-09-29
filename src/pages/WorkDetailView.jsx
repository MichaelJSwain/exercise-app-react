import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingView from "../components/LoadingView";
import DetailViewLayout from "../components/DetailViewLayout/DetailViewLayout";
import GoalLabel from "../components/GoalLabel/GoalLabel";
import DetailViewLayoutItem from "../components/DetailViewLayoutItem/DetailViewLayoutItem";
import ListItem from "../components/ListItem/ListItem";
import HighlightList from "../components/Highlights/List/HighlightList";
import PageHeader from "../components/PageHeader/PageHeader";
import FavouriteIcon from "../components/FavouriteIcon/FavouriteIcon";
import DetailViewHeader from "../components/DetailViewHeader/DetailViewHeader";
import Button from "../components/Buttons/PrimaryButton/Button";

const WorkoutDetailView = () => {
    const [workout, setWorkout] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setWorkout(location.state.workout);
        setIsLoading(false);
    }, []);

    const handleButtonClick = () => {
        console.log("Button clickedddd!");
        navigate(`/workouts/${workout._id}/active`, {state: {workout}});
    }

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
                        <DetailViewHeader title={workout.name} description={workout.description} workoutId={workout._id}/>
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
                        <Button text="Begin" clickFunc={handleButtonClick} variant="primary" />
                    </div>
                )
                }
            </DetailViewLayoutItem>
        </DetailViewLayout>
    )
};

export default WorkoutDetailView;