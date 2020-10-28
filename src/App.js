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
import CurrentMember from "./pages/Member/CurrentMember/CurrentMember";
import Alumni from "./pages/Member/Alumni/Alumni";
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
import Member from "./pages/Member";
import {appCreators} from "./redux/actionCreators";
import Auth from "./hoc/Auth";
import RegisterConfirm from "./pages/Register/RegisterConfirm";
import FindPw from "./pages/Login/FindPw";
import List from "./components/Post/PhotoPost/List";
import CurrentMemberDetail from "./pages/Member/CurrentMember/CurrentMemberDetail";

const App = (props) => {

    const {toastMessage} = useSelector(state => state.app);
    useEffect(() => {
        // token valid check request => false => navigate('/login')
    }, [])

    return (
        <Wrapper>
            {
                toastMessage && <ToastMessage message={toastMessage}/>
            }
            <Layout>
                <Switch>
                    <Route exact path={'/register'} component={Register}/>
                    <Route exact path={'/register-confirm'} component={RegisterConfirm}/>
                    <Route exact path={'/find/pw'} component={FindPw}/>
                    <Route exact path={'/login'} component={Login}/>

                    {/* 리다이렉트 처리 : 오타, url에 params 추가 */}

                    <Route exact path={'/'} component={Home}/>

                    {/* introduction & research */}
                    {/* 컨텐츠 구성 질의, exact path 수정 */}
                    <Route exact path={'/introduction'} component={Auth(Introduction, null)}/>
                    <Route exact path={'/introduction/write'} component={Auth(IntroductionWrite, true)}/>
                    <Route exact path={'/research'} component={Auth(Research, null)}/>

                    {/* professor */}
                    {/* 한 분인지, 사이드바에 여러명 추가되는 지 */}
                    <Route exact path={'/professor/write'} component={Auth(ProfessorWrite, true)}/>
                    <Route path={'/professor'} component={Auth(Professor)}/>

                    {/* member */}
                    <Route path={'/member/current'} component={Auth(CurrentMember, null)}/>
                    <Route path={'/member/current/:id'} component={Auth(CurrentMemberDetail, null)}/>
                    <Route path={'/member/alumni'} component={Auth(Alumni, null)}/>
                    <Route path={'/member/alumni/:id'} component={Auth(Alumni, null)}/>
                    {/* redirect /member to member/current*/}
                    <Route path={'/member'} component={Auth(Member, null)}/>

                    {/* publications */}
                    <Route path={'/publication'} component={Auth(Publication, null)}/>

                    {/* lecture */}
                    <Route path={'/lecture'} component={Auth(Lecture, null)}/>
                    <Route exact path={'/lecture/:name'} component={Auth(Lecture, null)}/>

                    {/* community */}
                    <Route exact path={'/community/gallery'} component={Auth(Gallery, null)}/>
                    <Route exact path={'/community/notice'} component={Auth(Notice, null)}/>
                    {/*<Route exact path={'/community/board'} component={Auth(Board, null}/>*/}

                    {/* contact */}
                    <Route exact path={'/contact'} component={Auth(Contact, null)}/>

                    {/*<Route path={'/error/404'} component={Auth(Page404, null)}/>*/}
                    {/*<Redirect to={'/error/404'}/>*/}
                </Switch>
            </Layout>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default App;