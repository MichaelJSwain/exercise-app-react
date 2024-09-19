import { Link } from "react-router-dom";

const ListItem = ({item}) => {
    return (
        <Link to={`/workout/${item._id}`}>{item.name}</Link>
    )
};

export default ListItem;