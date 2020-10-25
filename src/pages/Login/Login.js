import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button,} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {selector as appSelector} from '../../redux/app/selector';
import {Action} from '../../redux/app/slice';

import BasicInfoConstants from '../../constants/basicInfo'

import PageTitle from "../../components/Titles/PageTitle";

const Login = (props) => {
    const dispatch = useDispatch();
    const {loginRequest, changeUserInfo} = Action;
    const [form] = Form.useForm();

    const onSubmit = async () => {
        try {
            const validInfos = await form.validateFields();
            dispatch(loginRequest(validInfos))
            console.log('Success:', validInfos);
            // dispatch(AppAction.loginRequest(values));
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
            // dispatch(AppAction.loginFail(errorInfo));
        }
    };

    const onChangeInfo = (e) => {
        const {value, id} = e.target;
        
        dispatch(changeUserInfo(id, value));
    }

    return (
        <Wrapper>
            <PageTitle title={'로그인'}/>

            학번 또는 교직원 번호로 로그인해주세요.
            (추가 스타일링 예정)

            <Form
                form={form}
                name="login"
                layout="vertical">
                <Form.Item
                    name="email"
                    label={'이메일'}
                    rules={[
                        {required: true, message: '이메일은 필수 입력값 입니다.'},
                        {type: 'email', message: '예) aaa@university.com'}
                    ]}
                    colon={false}>
                    <Input id='email' placeholder={'이메일'} onChange={onChangeInfo}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label={'비밀번호'}
                    rules={[
                        {required: true, message: '비밀번호는 필수 입력값 입니다.'},
                        {pattern: /^[A-Za-z0-9]{6,12}$/, message: '비밀번호는 숫자와 문자 포함 형태의 6~12자리입니다.'},
                        ]}
                    colon={false}>
                    <Input.Password id='password' placeholder={'비밀번호'} onChange={onChangeInfo}/>
                </Form.Item>

                <Form.Item>
                    <SubmitButton htmlType={'submit'} onClick={onSubmit} type={'primary'} block>
                        로그인
                    </SubmitButton>
                </Form.Item>
            </Form>

            {/*<Helps>*/}
            {/*    <div onClick={() => navigate('find/id')}>아이디 찾기</div>*/}
            {/*    <div onClick={() => navigate('find/pw')}>비밀번호 찾기</div>*/}
            {/*</Helps>*/}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .ant-form-item{
      margin-bottom: 17px;
    }
    .ant-input-affix-wrapper{
        padding: 0 11px;
    }
    .ant-input{
        height: 38px;
    }
    .ant-input-affix-wrapper, .ant-input{
      border-radius: 0;
    }
`;

const SubmitButton = styled(Button)`
  height: 45px;
  margin-top: 15px;
  background:#444;
  border-color:#444;
  line-height: initial;
  font-size: 17px;
  &:hover, &:focus{
    background:#585858;
    border-color:#585858;
  }
`;
export default Login;