import PropTypes from 'prop-types';
import css from "./Message.module.css";



export const Message = ({message}) => {
    return (
        <div className={css.message}>
            {message}
        </div>
    );
};


Message.propTypes = {
    message: PropTypes.string.isRequired
};
