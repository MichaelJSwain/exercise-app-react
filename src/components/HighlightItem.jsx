const HighlightItem = ({text, label}) => {
    return (
        <div style={{width: "fit-content"}}>
            <div className="" style={{marginBottom: "5px"}}>
                <img style={{height: "30px", width: "30px"}} src="https://cdn-icons-png.flaticon.com/512/109/109613.png" />
            </div>
            <div>
                <p style={{margin: "0px", fontWeight: "bold"}}>{text}</p>
                <p style={{margin: "0px", fontSize: "12px"}}>{label}</p>
            </div>
        </div>
    )
};

export default HighlightItem;