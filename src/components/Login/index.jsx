import css from "./Login.module.css";



export const Login = () => {
    const redirectToApi = () => {
        window.open("https://social-network.samuraijs.com/login", "_blank" ); // TODO: решить rel="nofollow noopener"
    };

    return (
        <div className={css.login}>
            <div>Login</div>
            <button onClick={redirectToApi}>login</button>
        </div>
    );
};