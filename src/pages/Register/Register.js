import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Steps, Mentions, Checkbox,} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {selector as appSelector} from '../../redux/app/selector';
import {Action as AppAction} from '../../redux/app/slice';
import PageTitle from "../../components/Titles/PageTitle";

const {Search} = Input;

const Register = (props) => {

    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
            // dispatch(AppAction.registerRequest(values));
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
            // dispatch(AppAction.registerFail(errorInfo));
        }
    };

    return (
        <Wrapper>
            <PageTitle title={'회원가입'}/>

            <Form
                form={form}
                name={'step1'}
                initialValues={{'clause1': false,}}
                layout="vertical">

                {/* no need <Form.Item> wrapper*/}
                <Mentions rows="15"
                          value="약관을 입력해주세요."/>
                <Form.Item
                    name={'clause1'}
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('필수 동의 항목입니다.')
                        }
                    ]}
                    style={{marginBottom: '30px'}}>
                    <Checkbox>위 약관에 동의합니다.</Checkbox>
                </Form.Item>

                <Form.Item
                    name={'email'}
                    label={'이메일 인증'}
                    rules={[
                        {required: true, message: '필수 입력 값입니다.'},
                        {type: 'email', message: '예) aaa@university.com'}
                    ]}
                    colon={false}>
                    <Search placeholder="학교 이메일 입력" enterButton="보내기" size="large" onSearch={() => {
                        // if valid email form, dispatch send verify code
                    }}/>
                </Form.Item>

                <Form.Item
                    name={'verify_code'}
                    label={'인증 번호'}
                    rules={[
                        {required: true, message: '필수 입력값입니다.'},
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('유효한 값을 입력해주세요.') // Promise.resolve() 대신 fetch result
                        }
                    ]}
                    colon={false}>
                    <Search placeholder="인증번호 입력" enterButton="인증 확인" size="large" onSearch={() => {
                        // dispatch submit verify code
                    }}/>
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