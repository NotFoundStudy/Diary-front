import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import BasicInfoConstants from '../../constants/basicInfo'

import { Form, Input, Button, Steps, Mentions, Checkbox, } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selector as appSelector } from '../../redux/app/selector';
import { Action } from '../../redux/app/slice';
import PageTitle from "../../components/Titles/PageTitle";

const { Search } = Input;

const Register = (props) => {

    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    const {changeUserInfo, registRequest} = Action;

    // const {user} = selector;

    const userInfoDispatcher = (name, value) => {
        dispatch(changeUserInfo({name, value}));
    }

    //async 주의
    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            // const {}
            console.log('Success:', values);
            // dispatch(AppAction.registerRequest(values));
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
            // dispatch(AppAction.registerFail(errorInfo));
        }
    };

    const onChangeEmail = (e) => {
        const {value} = e.target;
        const {email} = BasicInfoConstants;

        userInfoDispatcher(email.id, value);
    }

    const onChangePassword = (e) => {
        const {value} = e.target;
        const {password} = BasicInfoConstants

        userInfoDispatcher(password.id, value);
    }

    const onChangeName = (e) => {
        const {value} = e.target;
        const {name} = BasicInfoConstants;

        userInfoDispatcher(name.id, value);
    }

    return (
        <Wrapper>
            <PageTitle title={'Register'} />

            <Form
                form={form}
                name={'step1'}
                initialValues={{ 'clause1': false, }}
                layout="vertical">

                {/* no need <Form.Item> wrapper*/}
                <Mentions rows="15"
                    value="약관을 입력해주세요." />
                <Form.Item
                    name={'clause1'}
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('필수 동의 항목입니다.')
                        }
                    ]}
                    style={{ marginBottom: '30px' }}>
                    <Checkbox>위 약관에 동의합니다.</Checkbox>
                </Form.Item>

                <Form.Item
                    name={'email'}
                    label={'이메일 인증'}
                    rules={[
                        { required: true, message: '필수 입력 값입니다.' },
                        { type: 'email', message: '예) aaa@university.com' }
                    ]}
                    colon={false}>
                    <Input placeholder="학번" onChange={onChangeEmail}/>
                </Form.Item>
                
                <Form.Item
                    name={'password'}
                    label={'비밀번호'}
                    rules={[
                        { required: true, message: '필수 입력값입니다.' },
                        { type : 'password', message: '8 ~ 12글자' }
                    ]}
                    colon={false}>
                    <Input.Password placeholder='password' onChange={onChangePassword}/>
                </Form.Item>

                <Form.Item
                    name={'name'}
                    label={'이름'}
                    rules={[
                        { required: true, message: '필수 입력값입니다.' },
                    ]}
                    colon={false}>
                    <Input type = 'text' placeholder='이름' onChange={onChangeName}/>
                </Form.Item>

                <Form.Item
                    name={'verify_code'}
                    label={'인증 번호'}
                    rules={[
                        { required: true, message: '필수 입력값입니다.' },
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('유효한 값을 입력해주세요.') // Promise.resolve() 대신 fetch result
                        }
                    ]}
                    colon={false}>
                    <Search placeholder="인증번호 입력" enterButton="인증 확인" size="large" onSearch={() => {
                        // dispatch submit verify code
                    }} />
                </Form.Item>

                <SubmitButton htmlType={'submit'} onClick={onSubmit} type={'primary'} block>
                    가입하기
                </SubmitButton>
                    
            </Form>
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
    
    // search
    .ant-input-search {
        .ant-input{
          border-right:1px solid #d9d9d9;
          &:focus{
             border-color:#40a9ff;
          }
        }
        .ant-btn-primary{
          height: 38px;
          background: #888;
          border-color:#888;
          font-size: 14px;
        }
     }
    .ant-form-item-has-error {
      .ant-input{
        border-color:#ff4d4f;
      }
    }
    .ant-input-search-button {
      margin-left: 7px;
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
export default Register;