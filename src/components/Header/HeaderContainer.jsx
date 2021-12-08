import React from "react";
import {connect} from "react-redux";
import {authMe} from "../../redux/auth.reducer";
import Header from "./Header";



class HeaderContainer extends React.Component {
    componentDidMount() {
        console.log("HeaderContainer.componentDidMount");
        this.props.authMe();
    }

    render() {
        console.log("HeaderContainer.render");
        return (
            <Header {...this.props}/>
        );
    }
}


const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
}

const mapDispatchToProps = {
    authMe
};



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);