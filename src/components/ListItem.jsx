import { Link, useNavigate } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({item}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/workouts/${item._id}`, { state: { workout: item } });
    }

    return (
        <div className="listItem" onClick={() => {handleNavigate();}}>
         {/* <Link className="listItem" to={`/workouts/${item._id}`} > */}
            <div className="listItem-content">
                <div className="listItem-image-container">
                    <img className="list-item-image" src={item.image} />
                </div>
                <div className="listItem-text-container">
                    <h5 className="subtitle">
                        {item.name}
                    </h5>
                    <div className="listItem-info">
                        {item.duration} - {item.difficulty} - {item.equipment} - {item.format}
                    </div>
                </div>
            </div>
         {/* </Link> */}
        </div>
    )
};

export default ListItem;