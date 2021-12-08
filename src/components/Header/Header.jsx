import css from "./Header.module.css";



const Header = ({isAuth, login}) => {
    const redirectToApi = () => {
        window.open("https://social-network.samuraijs.com/login", "_blank");
    }
    const userButton = isAuth
        ? <span>{login}</span>
        : <span onClick={redirectToApi}>Login</span>;

    return (
        <header className={css.header}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" alt="no"/>
            <div className={css.loginBlock}>
                {userButton}
            </div>
        </header>
    );
};



export default Header;