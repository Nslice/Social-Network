import React from "react";
import {connect} from "react-redux";
import {userApi} from "../../api/api";
import {setUserData} from "../../redux/auth.reducer";
import Header from "./Header";



class HeaderContainer extends React.Component {
    componentDidMount() {
        console.log("HeaderContainer.componentDidMount");
        userApi.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);
                }
            })
            .catch(console.log);
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
    setUserData
};



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);