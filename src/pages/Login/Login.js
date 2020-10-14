import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { navigate } from '../../helper/historyHelper';

import { useSelector, useDispatch } from 'react-redux';
import { Action as AppAction } from '../../redux/app/slice';
import { selector as appSelector } from '../../redux/app/selector';

const Login = (props) => {
    const dispatch = useDispatch();
    // 필요한 전역 상태값을 selector 를 통해 가져옵니다.
    const { user, inputs } = useSelector(appSelector.all);
    // 필요한 action method를 가져옵니다.
    const { changeInput, loginRequest } = AppAction;
    const { email, password } = inputs;

    const [ toggle, setToggle ] = useState(false);

    const onChangeToggle = useCallback(() => setToggle((toggle) => !toggle), []);

    const onChangeInput = useCallback((e) => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value }));
    }, []);

    const onSubmit = useCallback(() => dispatch(loginRequest({ email, password })), []);

    return (
        <Wrapper>
            <Top>
                <TopText>Login</TopText>
            </Top>
            <AppSlogan>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p>adipisicing elit. Ipsam, pariatur?</p>
            </AppSlogan>
            <Input
                type={'text'}
                name="email"
                value={email}
                placeholder={'email'}
                onChange={onChangeInput}
            />
            <Input
                type={toggle ? 'text' : 'password'}
                name="password"
                value={password}
                placeholder={'PASSWORD'}
                onChange={onChangeInput}
            />
            <ButtonSend onClick={onChangeToggle}>비밀번호 숨기기</ButtonSend>
            <ButtonSend onClick={onSubmit}>Login</ButtonSend>
            <Helps>
                <div onClick={() => navigate('find/id')}>아이디 찾기</div>
                <div onClick={() => navigate('find/pw')}>비밀번호 찾기</div>
            </Helps>
            <br />
            구글로그인 oAuth로그인
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Top = styled.div`
    width: 100%;
    padding: 20px 15px;
    background: #08c;
`;
const TopText = styled.div`
    font-size: 17px;
    font-weight: 400;
    color: #fff;
`;
const AppSlogan = styled.div`
    margin: 50px 0;
    text-align: center;
`;

const Input = styled.input`
    width: 50%;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #d4d4d4;
    padding: 5px 18px;
    font-size: 15px;
    font-weight: 400;
    color: #000;
    & + & {
        margin-top: 10px;
    }
`;
const ButtonSend = styled.div`
    display: inline-flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 25px;
    padding: 18px 15px;
    background: #08c;
    cursor: pointer;
    font-size: 17px;
    font-weight: 400;
    color: #fff;
`;

const Helps = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    > div {
        margin-left: 15px;
        text-decoration: underline;
        font-size: 13px;
        color: #999;
        cursor: pointer;
        &:nth-child(1) {
            margin-left: 0;
        }
    }
`;
export default Login;