import css from "./MyPosts.module.css";
import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Post from "./Post/Post";



const MyPosts = (props) => {
    const textMessageElement = React.createRef();
    const [isError, setIsError] = React.useState(false);


    const onAddPost = () => {
        setIsError(false);
        const text = textMessageElement.current.value;
        if (!text) {
            setIsError(true)
            return;
        }
        props.addPost();
        textMessageElement.current.focus();
    };

    const onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    const postsElements = props.posts
        .map(x => <Post key={x.id} name={x.name} message={x.message} likeCount={x.likesCount}/>);


    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <TextField className={css.textField}
                               inputRef={textMessageElement}
                               value={props.newPostText}
                               onChange={onPostChange}
                               fullWidth
                               multiline
                               minRows={3}
                               maxRows={10}
                               variant="filled"
                               label="Message"
                               error={isError}
                               helperText={isError ? "Empty message" : null}/>
                </div>
                <div>
                    <Button onClick={onAddPost}
                            color="secondary"
                            variant="contained"
                            style={{marginTop: "5px"}}
                            endIcon={<KeyboardArrowRightIcon/>}>
                        Add Post
                    </Button>
                </div>
            </div>
            <div className={css.postItems}>
                {postsElements}
            </div>
        </div>
    );
};



export default MyPosts;