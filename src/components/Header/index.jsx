import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {authMe} from "redux/actions/authActions";
import {HeaderView} from "./HeaderView";



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <HeaderView {...this.props}/>
        );
    }
}



HeaderContainer.propTypes = {
    // state:
    userId: PropTypes.number,
    email: PropTypes.string,
    login: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    // dispatch:
    authMe: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,  // TODO: зачем замапил это
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
}

const mapDispatchToProps = {
    authMe
};



export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);