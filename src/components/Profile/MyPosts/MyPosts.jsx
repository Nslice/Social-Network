import * as React from "react";

import css from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    const state = props.store.getState();
    const posts = state.profilePage.posts
        .map(x => <Post name={x.name} message={x.message} likeCount={x.likesCount}/>);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.store.addPost();
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.updateNewPostText(text);
    };

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={state.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {posts}
            </div>
        </div>
    );
};


export default MyPosts;