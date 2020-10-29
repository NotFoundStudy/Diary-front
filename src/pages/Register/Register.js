import React, {useState} from 'react';
import styled from 'styled-components';
import BasicInfoConstants from '../../constants/basicInfo'
import {Form, Input, Button, Steps, Mentions, Checkbox,} from 'antd';
import PageTitle from "../../components/Titles/PageTitle";
import {userCreators} from "../../redux/actionCreators";

const {Search} = Input;

const Register = (props) => {

    const [form] = Form.useForm();

    const [passwordConfirm, setPasswordConfirm] = useState('');

    //async 주의
    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
            userCreators.register({
                email : values.email,
                password :values.password,
                studentId : values.studentId,
                name : values.name,
            });
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Wrapper>
            <PageTitle title={'가입하기'}/>

            <Form
                form={form}
                name={'register'}
                initialValues={{'clause1': true,}}
                validateMessages={{required: "필수 입력 값 입니다."}}>

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
                    label={'학교 이메일'}
                    rules={[
                        {required: true},
                        {type: 'email', message: '학교 이메일을 입력해주세요.'},
                    ]}
                    colon={false}>
                    <Input type='text' placeholder='학교 이메일'/>
                </Form.Item>

                <Form.Item
                    name={'studentId'}
                    label={'학번'}
                    rules={[
                        {required: true},
                        // 몇글자 숫자 Regex
                    ]}
                    colon={false}>
                    <Input type='text' placeholder='학번 (숫자 8자)'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label={'비밀번호'}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    rules={[
                        {required: true},
                        // {pattern: /^[A-Za-z0-9]{6,12}$/, message: '숫자와 문자 포함 형태의 6~12자리로 구성하여 주세요.'},
                    ]}
                    colon={false}>
                    <Input.Password id='password' placeholder={'비밀번호 (숫자와 문자 포함 형태의 6~12자리)'}/>
                </Form.Item>

                <Form.Item
                    name="passwordConfirm"
                    label={'비밀번호 확인'}
                    rules={[
                        {required: true},
                        {
                            validator: (_, value) =>
                                value === passwordConfirm ? Promise.resolve() : Promise.reject('비밀번호가 일치하지 않습니다.')
                        },
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