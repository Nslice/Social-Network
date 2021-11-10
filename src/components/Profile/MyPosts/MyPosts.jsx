import css from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = () => {

    const posts = [
        {id: 1, name: "gubich", message: 'Hi, how are you?', likesCount: 12},
        {id: 2, name: "alich", message: 'It\'s my first post', likesCount: 11}
    ].map(x => <Post name={x.name} message={x.message} likeCount={x.likesCount}/>);


    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {posts}
            </div>
        </div>
    );
};



export default MyPosts;