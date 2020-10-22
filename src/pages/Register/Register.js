import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Steps} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {selector as appSelector} from '../../redux/app/selector';
import {Action as AppAction} from '../../redux/app/slice';
import PageTitle from "../../components/Titles/PageTitle";
import Step1 from "./step1/Step1";
import Step3 from "./step3/Step3";
import Step2 from "./step2/Step2";

const { Step } = Steps;

const Register = (props) => {
    const dispatch = useDispatch();

    // const { user, inputs } = useSelector(appSelector.all);
    // const { email, password } = inputs;

    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(AppAction.loginRequest(values));
    };

    // trigger after submitting the form and verifying data failed
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        dispatch(AppAction.loginFail(errorInfo));
    };

    return (
        <Wrapper>
            <PageTitle title={'회원가입'}/>


            {/* validate => current 값 */}
            <Steps current={1}>
                <Step title="1 단계" description="조항 동의" />
                <Step title="2 단계" description="학생 인증" />
                <Step title="3 단계" description="정보 입력" />
            </Steps>

            <Step1/>
            <Step2/>
            <Step3/>

            {/*<Form*/}
            {/*    name="basic"*/}
            {/*    onFinish={onFinish}*/}
            {/*    onFinishFailed={onFinishFailed}>*/}
            {/*    <Form.Item*/}
            {/*        name="email"*/}
            {/*        rules={[*/}
            {/*            {required: true, message: '이메일은 필수 입력값 입니다.'},*/}
            {/*            {pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, message: '유효하지 않은 형식 입니다.'}*/}
            {/*        ]}>*/}
            {/*        <Input placeholder={'이메일'}/>*/}
            {/*    </Form.Item>*/}
            {/*    <Form.Item*/}
            {/*        name="password"*/}
            {/*        rules={[*/}
            {/*            {required: true, message: '비밀번호는 필수 입력값 입니다.'},*/}
            {/*            {pattern: /^[A-Za-z0-9]{6,12}$/, message: '비밀번호는 숫자와 문자 포함 형태의 6~12자리입니다.'},*/}
            {/*        ]}>*/}
            {/*        <Input.Password placeholder={'비밀번호'}/>*/}
            {/*    </Form.Item>*/}

            {/*    <Form.Item>*/}
            {/*        <Button type="primary" htmlType="submit">*/}
            {/*            로그인*/}
            {/*        </Button>*/}
            {/*    </Form.Item>*/}
            {/*</Form>*/}

            {/*<Helps>*/}
            {/*    <div onClick={() => navigate('find/id')}>아이디 찾기</div>*/}
            {/*    <div onClick={() => navigate('find/pw')}>비밀번호 찾기</div>*/}
            {/*</Helps>*/}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .ant-form-item{
      margin-bottom: 7px;
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
export default Register;