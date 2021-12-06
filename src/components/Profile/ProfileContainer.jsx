import React from "react";
import {connect} from "react-redux";
import {userApi} from "../../api/api";
import {useParams} from "react-router-dom";
import {setUserProfile} from "../../redux/profile.reducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer"



// https://stackoverflow.com/questions/62365009/how-to-get-parameter-value-from-react-router-dom-v6-in-class
const withRouter = (Child) => {
    return (props) => {
        const params = useParams();
        return <Child {...props} params={params}/>;
    };
};


class ProfileContainer extends React.Component {
    constructor(props) {
        console.log("ProfileContainer.constructor");
        super(props);
    }

    componentDidMount() {
        console.log("ProfileContainer.componentDidMount");
        if (this.props.params.profileId !== this.props.profile?.userId) {
            userApi.getUserProfile(this.props.params.profileId)
                .then(data => this.props.setUserProfile(data))
                .catch(console.log);
        }
    }

    componentWillUnmount() {
        console.log("ProfileContainer.componentWillUnmount");
        this.props.setUserProfile(null);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ProfileContainer.componentDidUpdate");
        if (prevProps.params.profileId !== this.props.params.profileId) {
            userApi.getUserProfile(this.props.params.profileId)
                .then(data => this.props.setUserProfile(data))
                .catch(console.log);
        }
    }

    render() {
        return (
            <div>
                <ProfileInfo profile={this.props.profile}/>
                <MyPostsContainer/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    };
};

const mapDispatchToProps = {
    setUserProfile
};



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));