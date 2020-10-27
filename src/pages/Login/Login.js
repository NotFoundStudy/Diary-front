import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button,} from 'antd';
import PageTitle from "../../components/Titles/PageTitle";
import {userCreators} from "../../redux/actionCreators";
import {AiOutlineMail} from "react-icons/all";

const Login = (props) => {

    const [form] = Form.useForm();

    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
            userCreators.login(values)
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Wrapper>
            <PageTitle title={'로그인'}/>

            {/*<div className="guide">*/}
            {/*    <p>학번 또는 학교 이메일로 로그인해주세요.</p>*/}
            {/*</div>*/}

            <Form
                form={form}
                name="login"
                validateMessages={{required: "필수 입력 값 입니다."}}>
                <Form.Item
                    name="userId"
                    label={'학번/이메일'}
                    rules={[
                        {required: true},
                        // {type: 'email', message: '예) aaa@university.com'}
                    ]}
                    colon={false}>
                    <Input id='email' placeholder={'학번 또는 학교 이메일'}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label={'비밀번호'}
                    rules={[
                        {required: true},
                        // {pattern: /^[A-Za-z0-9]{6,12}$/, message: '비밀번호는 숫자와 문자 포함 형태의 6~12자리입니다.'},
                        ]}
                    colon={false}>
                    <Input.Password id='password' placeholder={'비밀번호'}/>
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
    .guide {
      padding: 33px 0 69px;
      text-align: center;
      p {
        margin-bottom: 0;
        line-height: 1.4;
        font-size: 17px;
        color:#232323;
      }
    }
    .ant-form-item {
      margin-bottom: 17px;
    }
    .ant-input {
        height: 38px;
    }
    .ant-form-item-label > label {
      height: initial;
      line-height: 38px;
      font-size: 15px;
    }
    .ant-input-affix-wrapper, .ant-input {
      border-radius: 0;
    }
    .ant-input-affix-wrapper { // password input
        padding: 0 11px;
    }
    .ant-form-horizontal .ant-form-item-label { // form.item label & input layout
      width: 110px;
      text-align:left;
    }
`;

const SubmitButton = styled(Button)`
  height: 48px;
  margin-top: 30px;
  background:#094c90;
  border-color:#094c90;
  line-height: initial;
  font-size: 17px;
  &:hover, &:focus{
    background:#0a5199;
    border-color:#0a5199;
  }
`;
export default Login;