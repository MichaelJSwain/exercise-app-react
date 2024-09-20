import { Link } from "react-router-dom";

const ListItem = ({item}) => {
    return (
        <Link to={`/workouts/${item._id}`}>{item.name}</Link>
    )
};

export default ListItem;