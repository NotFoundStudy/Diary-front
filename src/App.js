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
import CurrentMember from "./pages/Members/CurrentMember/CurrentMember";
import Alumni from "./pages/Members/Alumni/Alumni";
import Research from "./pages/Research/Research";
import Publication from "./pages/Publication/Publication";
import Lecture from "./pages/Lecture/Lecture";
import Gallery from "./pages/Community/Gallery";
import Notice from "./pages/Community/Notice";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";
import IntroductionWrite from "./pages/Introduction/Introduction/IntroductionWrite";
import Viewer from "./components/Editor/Viewer";
import ProfessorWrite from "./pages/Introduction/Professor/ProfessorWrite";
import Members from "./pages/Members";

const App = (props) => {

    return (
        <Wrapper>
            <Layout>
                <Switch>
                    <Route path={'/user/regist/input'} component={Register}/>
                    <Route path={'/login'} component={Login}/>

                    {/* 리다이렉트 처리 : 오타, url에 params 추가 */}

                    <Route exact path={'/'} component={Viewer}/>

                    {/* introduction & research */}
                    {/* 컨텐츠 구성 질의, exact path 수정 */}
                    <Route exact path={'/introduction'} component={Introduction}/>
                    <Route exact path={'/introduction/write'} component={IntroductionWrite}/>
                    <Route exact path={'/research'} component={Research}/>

                    {/* professor */}
                    {/* 한 분인지, 사이드바에 여러명 추가되는 지 */}
                    <Route exact path={'/professor/write'} component={ProfessorWrite}/>
                    <Route path={'/professor'} component={Professor}/>

                    {/* members */}
                    <Route path={'/members/current'} component={CurrentMember}/>
                    <Route path={'/members/current/:id'} component={CurrentMember}/>
                    <Route path={'/members/alumni'} component={Alumni}/>
                    <Route path={'/members/alumni/:id'} component={Alumni}/>
                    <Route path={'/members'} component={Members}/>

                    {/* publications */}
                    <Route path={'/publication'} component={Publication}/>

                    {/* lecture */}
                    <Route path={'/lecture'} component={Lecture}/>
                    <Route exact path={'/lecture/:name'} component={Lecture}/>

                    {/* community */}
                    <Route exact path={'/community/gallery'} component={Gallery}/>
                    <Route exact path={'/community/notice'} component={Notice}/>
                    {/*<Route exact path={'/community/board'} component={Board}/>*/}

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