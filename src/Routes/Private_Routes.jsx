import PropTypes from "prop-types";
import { Navigate } from "react-router-dom"

export const Private_Routes = ({ children }) => {
    const userState = localStorage.getItem("auth") || false;
    const json = JSON.parse(userState)

    if (json.token){
        children
    }
    return <Navigate to='/Home' />
}

Private_Routes.propTypes = {
    children: PropTypes.node,
};