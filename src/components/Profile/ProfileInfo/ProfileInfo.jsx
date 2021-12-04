import Preloader from "../../common/Preloader/Preloader";
import css from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png"



const ProfileInfo = ({profile}) => {
    console.log("Rendering ProfileInfo");

    if (!profile) {
        return <Preloader visible={true}/>
    }

    const imgSrc = profile.photos?.large ?? userPhoto;
    return (

        <div className={css.profileInfo}>
            <div className={css.mainPhoto}>
                <img src={imgSrc} alt="no"/>
            </div>
            <div className={css.descriptionBlock}>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
            </div>
        </div>
    );
};


export default ProfileInfo;