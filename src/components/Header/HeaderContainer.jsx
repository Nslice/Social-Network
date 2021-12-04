import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setUserData} from "../../redux/auth.reducer";
import Header from "./Header";



class HeaderContainer extends React.Component {
    componentDidMount() {
        console.log("HeaderContainer.componentDidMount");

        const url = "https://social-network.samuraijs.com/api/1.0";
        axios.get(`${url}/auth/me`,
            {
                withCredentials: true,
                timeout: 10_000
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log("HeaderContainer.render");

        return (
            <Header {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => {
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