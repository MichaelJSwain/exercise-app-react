import ListItem from "./ListItem";

const ListView = ({items}) => {
    console.log("items = ", items)
    return (
        <>
            <h4>List view</h4>
            {items.map(item => {
                return <ListItem item={item} key={item._id}/>;
            })}
        </>
    )
};

export default ListView;