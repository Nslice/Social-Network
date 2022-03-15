import React from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {withRouter} from "hoc/withRouter";
import {setUserProfile, loadUserProfile} from "redux/actions/profileActions";
import {ProfileInfo} from "./ProfileInfo";
import {MyPosts} from "./MyPosts"



class ProfileContainer extends React.Component {
    componentDidMount() {
        if (this.props.params.profileId !== this.props.profile?.userId)
            this.props.loadUserProfile(this.props.params.profileId);
    }

    componentWillUnmount() {
        this.props.setUserProfile(null);
    }

    render() {
        return (
            <div>
                <ProfileInfo profile={this.props.profile}/>
                <MyPosts/>
            </div>
        );
    }
}


ProfileContainer.propTypes = {
    // state:
    profile: PropTypes.object,
    // dispatch:
    setUserProfile: PropTypes.func.isRequired,
    loadUserProfile: PropTypes.func.isRequired,

    params: PropTypes.shape({profileId: PropTypes.string}).isRequired
};


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};

const mapDispatchToProps = {
    setUserProfile,
    loadUserProfile
};

const myCompose = (...funcs) => {
    if (funcs.length === 1) {
        return funcs[0];
    }
    console.log(funcs);

    return funcs.reduce((a, b) => {
        console.log(a.name + "|" + b.name);
        return (...args) => {
            return a(b(...args))
        };
    });
};



export const Profile = compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);