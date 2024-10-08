import { useContext, useState } from "react";
import "./FavouriteIcon.css";
import { AuthContext } from "../Context/AuthContext";
import { AuthDrawerContext } from "../Context/AuthDrawerContext";

const FavouriteIcon = ({isFavourited, handleFavourite}) => {
    // const [isFavourited, setIsFavourited] = useState(false);
    // const {user} = useContext(AuthContext);
    // const {showAuthDrawer} = useContext(AuthDrawerContext);

    // const handleFavourite = () => {
    //     if (user) {
    //         console.log("handling favourite ", user);

    //         // grab the current user from the user in context + push / remove the id from the favourites array in the user context.
    //        if (isFavourited) {
    //            console.log("removing from favourites", workoutId);
    //        } else {
    //            console.log("adding to favourites", workoutId);
    //        }
    //        setIsFavourited(!isFavourited);
    //     } else {
    //         console.log("no user")
    //         showAuthDrawer();
    //     }

    // }

    return (
        <div className={isFavourited ? "favouriteIcon selected" : "favouriteIcon"} onClick={handleFavourite}>
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d={isFavourited ? 
                        "M5.78115 1.40002C4.25988 1.40002 2.8637 2.03271 1.86183 3.17646C0.911458 4.26153 0.399902 5.7003 0.399902 7.21801C0.399902 8.90316 1.06148 10.4363 2.37976 12.0137C3.53394 13.3949 5.17942 14.8057 7.02212 16.3856L7.02214 16.3856L7.02217 16.3856L7.05525 16.414C7.75205 17.0114 8.46965 17.6267 9.23307 18.2987C9.45504 18.4942 9.71716 18.6 9.9999 18.6C10.2654 18.6 10.5315 18.5059 10.7438 18.319C11.5283 17.6283 12.2442 17.0145 12.9394 16.4184L12.9447 16.4139L12.9776 16.3857C14.8203 14.8058 16.4658 13.395 17.6201 12.0137C18.9383 10.4362 19.5999 8.90316 19.5999 7.21801C19.5999 5.7003 19.0884 4.26154 18.1379 3.17643C17.1361 2.03267 15.7399 1.40002 14.2187 1.40002C12.0882 1.40002 10.7395 2.66419 9.9999 3.69072C9.26027 2.66419 7.91157 1.40002 5.78115 1.40002Z" : 
                        "M10.0099 18.6C9.7299 18.6 9.4699 18.5 9.2399 18.3C8.4999 17.64 7.7999 17.05 7.1199 16.47C5.1699 14.8 3.5399 13.4 2.3799 12.02C1.0299 10.4 0.399902 8.88002 0.399902 7.22002C0.399902 5.69002 0.919902 4.25002 1.8599 3.18002C2.8799 2.03002 4.2699 1.40002 5.7899 1.40002C7.8999 1.40002 9.2499 2.63002 10.0099 3.69002C10.7699 2.63002 12.1099 1.40002 14.2299 1.40002C15.7499 1.40002 17.1499 2.03002 18.1499 3.18002C19.0899 4.26002 19.6099 5.69002 19.6099 7.22002C19.6099 8.88002 18.9799 10.4 17.6299 12.02C16.4799 13.4 14.8499 14.8 12.9599 16.42C12.2199 17.05 11.5199 17.65 10.7599 18.33C10.5499 18.51 10.2899 18.61 10.0199 18.61L10.0099 18.6ZM5.7899 2.60002C4.6199 2.60002 3.5499 3.09002 2.7699 3.97002C2.0199 4.83002 1.6099 5.98002 1.6099 7.22002C1.6099 8.58002 2.1499 9.86002 3.3099 11.25C4.3999 12.55 5.9999 13.92 7.8399 15.51C8.5799 16.15 9.2899 16.75 10.0299 17.41C10.7199 16.75 11.4299 16.15 12.1099 15.56C14.0199 13.93 15.6099 12.56 16.6999 11.25C17.8599 9.86002 18.3999 8.58002 18.3999 7.22002C18.3999 5.98002 17.9899 4.83002 17.2299 3.97002C16.4599 3.09002 15.3899 2.60002 14.2099 2.60002C12.5699 2.60002 11.5199 3.60002 10.9299 4.44002C10.7699 4.67002 10.6399 4.89002 10.5199 5.11002L9.9899 6.10002L9.4599 5.11002C9.3499 4.90002 9.2099 4.67002 9.0499 4.44002C8.4599 3.60002 7.4099 2.60002 5.7699 2.60002H5.7899Z"
                    }
                    fill="#000C2D"
                >
                </path> 
            </svg>
        </div>
    )
};

export default FavouriteIcon;