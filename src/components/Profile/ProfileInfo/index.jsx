import PropTypes from "prop-types";
import {Preloader} from "components/common/Preloader";
import css from "./ProfileInfo.module.css";
import userDefaultPhoto from "assets/images/user.png"



export const ProfileInfo = ({profile}) => {
    if (!profile)
        return <Preloader visible={true}/>

    const imgSrc = profile.photos?.large ?? userDefaultPhoto;
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


ProfileInfo.propTypes = {
    profile: PropTypes.shape({
        fullName: PropTypes.string,
        aboutMe: PropTypes.string,
        photos: PropTypes.shape({
            small: PropTypes.string,
            large: PropTypes.string
        })
    })
};