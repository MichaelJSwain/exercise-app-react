import HighlightItem from "../Item/HighlightItem";
import "./HighlightList.css";

const HighlightList = ({duration, level, calories}) => {
    return (
        <div className="HighlightList">
            <HighlightItem text={duration} label="Duration" image="https://cdn-icons-png.flaticon.com/512/109/109613.png"/>
            <HighlightItem text={level} label="Level" image="https://cdn-icons-png.flaticon.com/512/109/109613.png"/>
            <HighlightItem text={calories} label="Kcal" image="https://cdn-icons-png.flaticon.com/512/109/109613.png"/>
        </div>
    )
};

export default HighlightList;