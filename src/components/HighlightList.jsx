import HighlightItem from "./HighlightItem";

const HighlightList = ({duration, level, calories}) => {
    return (
        <div style={{display: "flex", justifyContent: "space-around", padding: "10px 0", marginBottom: "20px", borderBottom: "0.5px solid grey"}}>
            <HighlightItem text={duration} label="Duration" image="https://cdn-icons-png.flaticon.com/512/109/109613.png"/>
            <HighlightItem text={level} label="Level" image="https://cdn-icons-png.flaticon.com/512/109/109613.png"/>
            <HighlightItem text={calories} label="Kcal" image="https://cdn-icons-png.flaticon.com/512/109/109613.png"/>
        </div>
    )
};

export default HighlightList;