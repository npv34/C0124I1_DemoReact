import './App.css';

import UserList from "./components/Users/UserList/UserList";

import {Route, Routes} from "react-router-dom";
import Master from "./pages/Master/Master";
import UserAdd from "./components/Users/UserAdd/UserAdd";
import UserEdit from "./components/Users/UserEdit/UserEdit";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {useSelector} from "react-redux";

function App() {
    const auth = useSelector(state => state.auth)

    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/register"} element={<Register/>} />
                { auth.isLogin && (
                    <Route path={"/"} element={<Master/>} >
                        <Route path={"/users"} element={<UserList/>} />
                        <Route path={"/users/create"} element={<UserAdd/>} />
                        <Route path={"/users/:id/edit"} element={<UserEdit/>} />
                    </Route>
                )}
            </Routes>
        </>
    );
}

export default App;
