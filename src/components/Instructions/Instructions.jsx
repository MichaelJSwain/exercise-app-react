import "./Instructions.css";

const Instructions = ({instructions}) => {
    return (
        <div className="exercise-instructions-container">
            <ul className="exercise-instructions-list">
                {instructions.map(instruction => {
                    return <li className="exercise-instructions-listItem" key={instruction}>{instruction}</li>
                })}
            </ul>
        </div>
    )
};

export default Instructions;