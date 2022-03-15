import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "components/Login";
import {Header} from "components/Header";
import {Navbar} from "components/Navbar";
import {Dialogs} from "components/Dialogs";
import {Profile} from "components/Profile";
import {Users} from "components/Users";
import {News} from "components/News";
import {Music} from "components/Music";
import {Settings} from "components/Settings";
import './App.css';



const App = () => {
    console.log("App Loading");

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}>
                        <Route path=":id" element={<Dialogs/>}/>
                    </Route>
                    <Route path="/profile/:profileId" element={<Profile/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    {/*<Route path="/*" element={<Navigate to="/" replace/>}/>*/}
                </Routes>
            </div>
        </div>
    );
};



export default App;