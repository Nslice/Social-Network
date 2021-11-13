import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile.reducer";



const MyPosts = (props) => {
    const posts = props.posts
        .map(x => <Post name={x.name} message={x.message} likeCount={x.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} placeholder="Enter text"/>
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