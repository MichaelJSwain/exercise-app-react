import { Link } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({item}) => {
    return (
        <Link className="listItem" to={`/workouts/${item._id}`} >
            <div className="listItem-content">
                <div className="listItem-image-container">
                    <img className="list-item-image" src="https://media.self.com/photos/61bcd0e05aed92fc4251b026/4:3/w_2560%2Cc_limit/GettyImages-1213234926.jpeg" />
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
        </Link>
    )
};

export default ListItem;