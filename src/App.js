import React, {useEffect} from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Page404 from "./pages/Error/Page404";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Introduction from "./pages/Introduction/Introduction";
import Professor from "./pages/Introduction/Professor";
import CurrentMember from "./pages/Introduction/CurrentMember";
import Alumni from "./pages/Introduction/Alumni";
import Research from "./pages/Research/Research";
import Publication from "./pages/Publication/Publication";
import Lecture from "./pages/Lecture/Lecture";
import Gallery from "./pages/Community/Gallery";
import Notice from "./pages/Community/Notice";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";

const App = (props) => {

    // toastMessage redux-slice 구조로 리팩토링 예정
    const {
        toastMessage
    } = useSelector(state => state.app);


    return (
        <Wrapper>
            {
                toastMessage && <ToastMessage message={toastMessage}/>
            }

            <Layout>
                <Switch>
                    <Route path={'/register'} component={Register}/>
                    <Route path={'/login'} component={Login}/>


                    {/* 구조화 리팩토링 예정 */}
                    {/* url 오타 리다이랙트 리팩토링 예정 */}

                    <Route exact path={'/'} component={Home}/>

                    {/* introduction */}
                    <Route exact path={'/introduction'} component={Introduction}/>
                    <Route exact path={'/introduction/professor'} component={Professor}/>

                    <Route exact path={'/introduction/people/currentMember'} component={CurrentMember}/>
                    <Route exact path={'/introduction/people/alumni'} component={Alumni}/>

                    {/* research */}
                    <Route exact path={'/research'} component={Research}/>

                    {/* publications */}
                    <Route exact path={'/publication'} component={Publication}/>

                    {/* lecture */}
                    <Route exact path={'/lecture'} component={Lecture}/>

                    {/* community */}
                    <Route exact path={'/community/gallery'} component={Gallery}/>
                    <Route exact path={'/community/notice'} component={Notice}/>

                    {/* contact */}
                    <Route exact path={'/contact'} component={Contact}/>


                    <Route path={'/error/404'} component={Page404}/>
                    <Redirect to={'/error/404'}/>
                </Switch>
            </Layout>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default App;