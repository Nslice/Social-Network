import {Navigate, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import './App.css';



const App = () => {
    console.log("Rendering App");

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}>
                        <Route path=":id" element={<DialogsContainer/>}/>
                    </Route>
                    <Route path="/profile/:profileId" element={<ProfileContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    {/*<Route path="/*" element={<Navigate to="/" replace/>}/>*/}
                </Routes>
            </div>
        </div>
    );
};


const HomePage = () => {
    return    (
        <div>
            HomePage
        </div>
    );
};



export default App;