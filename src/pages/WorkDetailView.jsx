import { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../components/Context/AuthContext";
import { AuthDrawerContext } from "../components/Context/AuthDrawerContext";
import PageTitle from "../components/PageTitle/PageTitle";
import axios from "axios";


const WorkoutDetailView = () => {
    const workout = useLocation().state.workout;
    const [isLoading, setIsLoading] = useState(true);
    const {user, setUser} = useContext(AuthContext);
    const {showAuthDrawer} = useContext(AuthDrawerContext);
    const navigate = useNavigate();
    console.log("running detail view component");
    const [isFavourited, setIsFavourited] = useState(user ? user.user.favourites.some(f => f === workout._id) : false);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        setIsFavourited(user ? user.user.favourites.some(f => f === workout._id) : false);
    }, [user]);

    useEffect(() => {
        console.log("favouritedddd");
    }, [isFavourited]);

    const handleButtonClick = async () => {
        console.log("Button clickedddd!");
        if (user) {
            const result = await axios.post("http://localhost:8080/exerciseApp/api/workouts/current", {userId: user.user._id, workoutId: workout._id})
            .then((response) => {
                console.log(response);
                const updatedUser = {...user};
                updatedUser.user.current.push(workout._id);

                setUser(updatedUser);
            })
            .catch(e => {
                console.log("error = ", e);
            })
            navigate(`/workouts/${workout._id}/active`, {state: {workout}});
        } else {
            showAuthDrawer();
        }
    }

    const handleFavourite = async () => {
        const filteredFavourites = user.user.favourites.filter(f => f !== workout._id);
        if (filteredFavourites.length === user.user.favourites.length) {
            filteredFavourites.push(workout._id);
        }

        setUser(() => {
            const updatedUser = {...user};
            updatedUser.user.favourites = filteredFavourites;
            return updatedUser;
        });

        // const response = await axios.post("http://localhost:8080/exerciseApp/api/favourites", {userId: user.user._id, workoutId: workout._id})
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });


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
                        <div className="DetailViewHeader">
                            <div className="DetailViewHeader-title-container">
                                <PageTitle title={workout.name} />
                                <FavouriteIcon isFavourited={isFavourited} handleFavourite={handleFavourite}/>
                            </div>
                            {workout.description && <p>{workout.description}</p>}
                        </div>
                        {/* <DetailViewHeader title={workout.name} description={workout.description} workoutId={workout._id}/> */}
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