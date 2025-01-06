import PropTypes from "prop-types";
import { Navigate } from "react-router-dom"

export const Public_Routes = ({ children }) => {
    const userState = localStorage.getItem("auth") || false;
    const json = JSON.parse(userState)

    if (json.token){
        <Navigate to='/Profile' />
    }
    return children
}

Public_Routes.propTypes = {
  children: PropTypes.node, 
};