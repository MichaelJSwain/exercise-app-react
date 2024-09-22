import PageTitle from "../PageTitle/PageTitle";
import "./PageHeader.css";

const PageHeader = ({title, description, children}) => {
    return (
        <div className="PageHeader">
            <PageTitle title={title} />
            {children}
            {description && <p>{description}</p>}
        </div>
    )
};

export default PageHeader;