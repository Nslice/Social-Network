import {connect} from "react-redux";
import {addPost, updateNewPostText} from "../../../redux/profile.reducer";
import {MyPostsView} from "./MyPostsView";



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = {
    addPost,
    updateNewPostText
};



export const MyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPostsView);