import { useState } from "react";
import "./FavouriteIcon.css";

const FavouriteIcon = ({id}) => {
    const [isFavourited, setIsFavourited] = useState(false);

    const handleFavourite = () => {
        console.log("handling favourite");

         // grab the current user from the user in context + push / remove the id from the favourites array in the user context.
        if (isFavourited) {
            console.log("removing from favourites");
        } else {
            console.log("adding to favourites");
        }
        setIsFavourited(!isFavourited);
    }

    return (
        <div className={isFavourited ? "favouriteIcon selected" : "favouriteIcon"} onClick={handleFavourite}>
        </div>
    )
}

export default FavouriteIcon;