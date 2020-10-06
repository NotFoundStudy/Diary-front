import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Error/Page404";
import {appCreators} from "./redux/actionCreators";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import {navigate} from "./helper/historyHelper";
import {getAccessToken, setAccessToken} from "./helper/tokenHelper";
import Direct from "./pages/Direct/Direct";
import Register from "./pages/Register/Register";

const App = (props) => {

    const {
        user,
        toastMessage
    } = useSelector(state => state.app);

    useEffect(() => {
        appCreators.setToastMessage('토스트 메세지입니다.(4초)');
    }, [])

    return (
        <Wrapper>
            <nav>
                {
                    user
                        ? <div onClick={() => appCreators.logOut()}>logout</div>
                        : <div onClick={() => appCreators.logIn()}>log in</div>

                }
            </nav>
            {
                toastMessage && <ToastMessage message={toastMessage}/>
            }

            <Switch>
                {/* user 값이 없으면 로그인으로 다이랙트 */}
                <Route exact path={'/'} component={Contacts}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/contacts'} component={Contacts}/>
                <Route path={'/direct/:id'} component={Direct}/>

                <Route path={'/error/404'} component={Page404}/>

                <Redirect to={'/error/404'}/>
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default App;