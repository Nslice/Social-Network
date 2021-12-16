import PropTypes from "prop-types";
import preloaderSvg from "assets/images/preloader.svg";



export const Preloader = ({visible}) => {
    return (
        <span>
           {visible ? <img src={preloaderSvg} alt="no preloader svg"/> : null}
        </span>
    );
};


Preloader.propTypes = {
    visible: PropTypes.bool.isRequired
};