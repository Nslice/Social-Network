import {connect} from "react-redux";
import {Navigate} from "react-router-dom";



const getAuthRedirectComponent = (Component) => {
    return (props) => {
        if (!props.isAuth)
            return <Navigate to="/login"/>;
        return <Component {...props}/>;
    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};



export const withAuthRedirect = (Component) => {
    return connect(mapStateToProps)(getAuthRedirectComponent(Component));
};