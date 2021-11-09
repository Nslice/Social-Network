import css from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className>
            <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" alt="no"/>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );
};


export default Profile;