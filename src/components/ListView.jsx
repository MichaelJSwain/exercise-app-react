import ListItem from "./ListItem";

const ListView = ({items}) => {
    return (
        <>
            <h4>List view</h4>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                {items.map(item => {
                    return <ListItem item={item} key={item._id}/>;
                })}
            </div>
        </>
    )
};

export default ListView;