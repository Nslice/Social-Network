import css from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={css.posts}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post name="gubich" message="kuku epta"/>
                <Post name="alich" message="Hi, how are you"/>
                <Post name="alich" message="It's my first post"/>
                <Post name="alich" message="oke"/>
                <Post name="alich" message="oke"/>
                <Post name="alich" message="oke"/>
            </div>
        </div>
    );
};


export default MyPosts;