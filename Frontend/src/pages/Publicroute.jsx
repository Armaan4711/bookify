import { useContext } from "react";

import { Appcontext } from "../context/Appcontext";
import { replace } from "react-router-dom";

const Publicroute = ({ children }) => {
    const { user, authReady,navigate } = useContext(Appcontext);

    if (!authReady) return null;

    if (user) {
        return  navigate("/",replace);
    }

    return children;
};

export default Publicroute;