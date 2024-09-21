import ListItem from "../ListItem/ListItem";
import "./ListView.css";

const ListView = ({items}) => {
    return (
        <div className="listView-container">
            {items.map(item => {
                return <ListItem item={item} key={item._id}/>;
            })}
        </div>
    )
};

export default ListView;