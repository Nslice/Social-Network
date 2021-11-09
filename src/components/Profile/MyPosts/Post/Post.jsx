import css from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={css.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVh1gLWWiNKifedzR5UKnt2usBSWP2OWcZjuQ4byKVdpyLDpO9sUX1uVwXw_RaKt4a3s&usqp=CAU" alt="no gachimuchi"/>
            {`${props.name}: ${props.message}`}
            <div>
                <span>like</span>
            </div>
        </div>
    );

};


export default Post;