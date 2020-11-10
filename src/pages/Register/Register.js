import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Steps, Mentions, Checkbox,} from 'antd';
import PageTitle from "../../components/Titles/PageTitle";
import {userCreators} from "../../redux/actionCreators";
import {getLocalStorage} from "../../helper/tokenHelper";
import {useSelector} from "react-redux";
import debounce from "lodash.debounce";

const Register = (props) => {

    const [form] = Form.useForm();

    const {validEmail, validStudentId} = useSelector(state => state.user);

    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
        // initialValues Setting
        let localStorageValues = getLocalStorage('tmp-save-register');
        // setPasswordConfirm(localStorageValues?.password);
        localStorageValues
            ? setInitialValues({...localStorageValues, clause1: true})
            : setInitialValues({clause1: true})
    }, [])

    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
            userCreators.register({
                email: values.email,
                password: values.password,
                studentId: values.studentId,
                name: values.name,
            });
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    if (!initialValues) { // for inject RIGHT initialValues
        return false;
    }

    return (
        <Wrapper>
            <PageTitle title={'가입하기'}/>

            <Form
                form={form}
                name={'register'}
                initialValues={initialValues}
                validateMessages={{required: "필수 입력 값 입니다."}}
                scrollToFirstError>

                {/* no need <Form.Item> wrapper*/}
                <Mentions rows="15"
                          value="약관내용 ABC"/>
                <Form.Item
                    name={'clause1'}
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) => {
                                return value ? Promise.resolve() : Promise.reject('필수 동의 항목입니다.')
                            }
                        }
                    ]}
                    style={{marginBottom: '30px'}}>
                    <Checkbox>위 약관에 동의합니다.</Checkbox>
                </Form.Item>

                <Form.Item
                    name={'email'}
                    label={'학교 이메일'}
                    shouldUpdate
                    rules={[
                        {required: true},
                        {type: 'email', message: '학교 이메일을 입력해주세요.'},
                        {
                            validator:(_, value) => {
                                if (!value) {
                                    return Promise.resolve()
                                }
                                userCreators.checkEmail({email: value})
                                console.log('@@ validEmail', validEmail);
                                return validEmail
                                    ? Promise.resolve('사용가능한 이메일입니다.')
                                    : Promise.reject('중복된 이메일입니다.')
                            }
                        }
                    ]}
                    colon={false}>
                    <Input type='text' placeholder='학교 이메일'/>
                </Form.Item>

                <Form.Item
                    name={'studentId'}
                    label={'학번'}
                    shouldUpdate
                    rules={[
                        {required: true},
                        {
                            validator:(_, value) => {
                                if (!value) {
                                    return Promise.resolve()
                                }
                                userCreators.checkStudentId({studentId: value})
                                console.log('@@ validStudentId', validStudentId);
                                return validStudentId
                                    ? Promise.resolve('사용가능한 학번입니다.')
                                    : Promise.reject('중복된 학번입니다.')
                            }
                        }
                    ]}
                    colon={false}>
                    <Input type='text' placeholder='학번'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label={'비밀번호'}
                    // value={passwordConfirm}
                    // onChange={(e) => setPasswordConfirm(e.target.value)}
                    rules={[
                        {required: true},
                        {max: 30, message: '30자 이내로 구성해주세요.'}
                    ]}
                    colon={false}>
                    <Input.Password id='password' placeholder={'비밀번호 (30자 이내)'}/>
                </Form.Item>

                <Form.Item
                    name="passwordConfirm"
                    label={'비밀번호 확인'}
                    rules={[
                        {required: true},
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('비밀번호가 일치하지 않습니다.');
                            },
                        })
                    ]}
                    colon={false}>
                    <Input.Password id='passwordConfirm' placeholder={'비밀번호 확인'}/>
                </Form.Item>

                <Form.Item
                    name={'name'}
                    label={'이름'}
                    rules={[
                        {required: true},
                    ]}
                    colon={false}>
                    <Input type='text' placeholder='이름'/>
                </Form.Item>

                <SubmitButton htmlType={'submit'} onClick={onSubmit} type={'primary'} block>
                    가입하기
                </SubmitButton>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
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
    .ant-mentions { // clause textarea
      margin-bottom: 10px;
       > textarea {
         padding: 13px 13px;
       }
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
export default Register;