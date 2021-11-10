import css from "./ProfileInfo.module.css";



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" alt="no"/>
            </div>
            <div className={css.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
};



export default ProfileInfo;