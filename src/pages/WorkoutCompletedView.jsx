import { useNavigate } from "react-router-dom"

const WorkoutCompletedView = ({clickFunc}) => {

    const handleButtonClick = () => {
        
    }

    return (
        <>
            <h1>Workout completed! :)</h1>
            <button onClick={clickFunc}>Complete!</button>
        </>
    )
};

export default WorkoutCompletedView;