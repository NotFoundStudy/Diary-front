import React, {useEffect} from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Page404 from "./pages/Error/Page404";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const App = (props) => {

    // toastMessage redux-slice 구조로 리팩토링
    const {
        toastMessage
    } = useSelector(state => state.app);


    return (
        <Wrapper>
            {
                toastMessage && <ToastMessage message={toastMessage}/>
            }

            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/login'} component={Login}/>

                <Route path={'/error/404'} component={Page404}/>

                <Redirect to={'/error/404'}/>
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default App;