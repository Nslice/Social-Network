import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile.reducer";



const MyPostsContainer = ({store}) => {
    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    };

    const updateNewPostText = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}
        />
    );
};



export default MyPostsContainer;