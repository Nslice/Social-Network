import PropTypes from "prop-types";
import css from "./Post.module.css"



/**
 * @param {object} props - props
 * @param {string} props.name
 * @param {string} props.message
 * @param {number} props.likeCount
 * @return {JSX.Element}
 */
export const Post = (props) => {
    return (
        <div className={css.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVh1gLWWiNKifedzR5UKnt2usBSWP2OWcZjuQ4byKVdpyLDpO9sUX1uVwXw_RaKt4a3s&usqp=CAU" alt="no gachimuchi"/>
            {`${props.name}: ${props.message}`}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
};


Post.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired
};