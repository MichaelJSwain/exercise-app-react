import PageTitle from "../PageTitle/PageTitle";
import "./PageHeader.css";

const PageHeader = ({title, description}) => {
    return (
        <div className="PageHeader">
            <PageTitle title={title} />
            {description && <p>{description}</p>}
        </div>
    )
};

export default PageHeader;