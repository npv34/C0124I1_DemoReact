import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserList from "./components/Users/UserList/UserList";
import Counter from "./components/Counter/Counter";
import {Timer} from "./components/Timer/Timer";
import Timer2 from "./components/Timer/Timer2";
import {useEffect, useState} from "react";

function App() {

    return (
        <>
            <Header/>
            <UserList/>
            <Footer/>
        </>
    );
}

export default App;
