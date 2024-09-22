import "./HighlightItem.css";

const HighlightItem = ({text, label}) => {
    return (
        <div className="highlightItem">
            <div className="highlightItem-img-container">
                <img className="highlightItem-img" src="https://cdn-icons-png.flaticon.com/512/109/109613.png" />
            </div>
            <div>
                <p className="highlightItem-text">{text}</p>
                <p className="highlightItem-label">{label}</p>
            </div>
        </div>
    )
};

export default HighlightItem;