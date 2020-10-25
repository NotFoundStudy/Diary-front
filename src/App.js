import React, {useEffect} from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Page404 from "./pages/Error/Page404";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Introduction from "./pages/Introduction/Introduction/Introduction";
import Professor from "./pages/Introduction/Professor/Professor";
import CurrentMember from "./pages/Introduction/CurrentMember/CurrentMember";
import Alumni from "./pages/Introduction/Alumni/Alumni";
import Research from "./pages/Research/Research";
import Publication from "./pages/Publication/Publication";
import Lecture from "./pages/Lecture/Lecture";
import Gallery from "./pages/Community/Gallery";
import Notice from "./pages/Community/Notice";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Detail from "./components/Post/Card/Detail";
import Write from "./pages/Research/Write";
import IntroductionWrite from "./pages/Introduction/Introduction/IntroductionWrite";
import Viewer from "./components/Editor/Viewer";
import ProfessorWrite from "./pages/Introduction/Professor/ProfessorWrite";

const App = (props) => {

    return (
        <Wrapper>
            <Layout>
                <Switch>
                    <Route path={'/user/regist/input'} component={Register}/>
                    <Route path={'/login'} component={Login}/>

                    {/* 구조화 리팩토링 예정 */}
                    {/* url 오타 리다이랙트 리팩토링 예정 */}

                    <Route exact path={'/'} component={Viewer}/>

                    {/* introduction */}
                    <Route exact path={'/introduction'} component={Introduction}/>
                    <Route exact path={'/introduction/write'} component={IntroductionWrite}/>
                    <Route exact path={'/introduction/professor'} component={Professor}/>
                    <Route exact path={'/introduction/professor/write'} component={ProfessorWrite}/>

                    <Route exact path={'/introduction/people/currentMember'} component={CurrentMember}/>
                    <Route exact path={'/introduction/people/currentMember/:memberId'} component={CurrentMember}/>

                    <Route exact path={'/introduction/people/alumni'} component={Alumni}/>
                    <Route exact path={'/introduction/people/alumni/:alumniId'} component={Alumni}/>


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