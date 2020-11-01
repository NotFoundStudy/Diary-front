import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button,} from 'antd';
import PageTitle from "../../components/Titles/PageTitle";
import {userCreators} from "../../redux/actionCreators";
import {AiOutlineMail} from "react-icons/all";
import {navigate} from "../../helper/historyHelper";
import {useSelector} from "react-redux";

const Login = (props) => {

    const [form] = Form.useForm();
    const {validLogin} = useSelector(state => state.user);

    const onSubmit = async () => {
        try {
            const body = await form.validateFields();
            console.log('Success:', body);
            userCreators.login(body)
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Wrapper>
            <PageTitle title={'로그인'}/>

            <Form
                form={form}
                name="login"
                validateMessages={{required: "필수 입력 값 입니다."}}>
                <Form.Item
                    name="userId"
                    label={'학번/이메일'}
                    validateTrigger={'onSubmit'}
                    rules={[
                        {required: true},
                        // {
                        //     validator:(_, value) => {
                        //         console.log('@@ value', value);
                        //         if (!value) {
                        //             return Promise.resolve()
                        //         }
                        //         return validId
                        //             ? Promise.resolve('')
                        //             : Promise.reject('유효하지 않은 학번/이메일입니다.')
                        //     }
                        // }
                    ]}
                    colon={false}>
                    <Input placeholder={'학번 또는 학교 이메일'}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label={'비밀번호'}
                    rules={[
                        {required: true},
                        {max: 30, message: '30자 이내로 구성해주세요.'},
                        // {
                        //     validator:(_, value) => {
                        //         console.log('@@ value', value);
                        //         if (!value) {
                        //             return Promise.resolve()
                        //         }
                        //         return validId
                        //             ? Promise.resolve('')
                        //             : Promise.reject('유효하지 않은 비밀번호입니다.')
                        //     }
                        // }
                        ]}
                    colon={false}>
                    <Input.Password placeholder={'비밀번호 (30자 이내)'}/>
                </Form.Item>

                {
                    validLogin && <p>{validLogin}</p>
                }

                <Form.Item>
                    <SubmitButton htmlType={'submit'} onClick={onSubmit} type={'primary'} block>
                        로그인
                    </SubmitButton>
                </Form.Item>
            </Form>

            <Helps>
                <div onClick={() => navigate('/find/id')}>아이디 찾기</div>
                <div onClick={() => navigate('/find/pw')}>비밀번호 찾기</div>
            </Helps>
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

const Helps = styled.div`
  font-size: 0;
  > div {
    display: inline-block;
    vertical-align: middle;
    & + & {
      margin-left: 10px;
      padding-left: 10px;
      border-left:1px solid #ddd;
      font-size: 14px;
      font-weight: 400;
      color:#ddd;
      cursor:pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
`;
export default Login;