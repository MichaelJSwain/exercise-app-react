import PageTitle from "../PageTitle/PageTitle";
import FavouriteIcon from "../FavouriteIcon/FavouriteIcon";
import "./DetailViewHeader.css";

const DetailViewHeader = ({title, description, workoutId}) => {
    return (
        <div className="DetailViewHeader">
            <div className="DetailViewHeader-title-container">
                <PageTitle title={title} />
                <FavouriteIcon id={workoutId}/>
            </div>
            {description && <p>{description}</p>}
        </div>
    )
};

export default DetailViewHeader;