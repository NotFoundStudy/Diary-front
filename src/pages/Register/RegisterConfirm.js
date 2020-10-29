import React from 'react';
import styled from 'styled-components';
import BasicInfoConstants from '../../constants/basicInfo'
import { Form, Input, Button, Steps, Mentions, Checkbox, } from 'antd';
import PageTitle from "../../components/Titles/PageTitle";
import {userCreators} from "../../redux/actionCreators";
import {AiOutlineMail} from "react-icons/all";

const { Search } = Input;

const RegisterConfirm = (props) => {

    const [ form ] = Form.useForm();

    //async 주의
    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
            userCreators.confirmed(values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Wrapper>
            <PageTitle title={'이메일 인증'} />

            <div className="guide">
                <AiOutlineMail size={50} color={'#d2d2d2'} style={{marginBottom: '10px'}}/>
                <p>입력한 이메일로 인증코드가 발송되었습니다.</p>
                <p>이메일을 확인하여 가입을 완료하여 주세요.</p>
            </div>

            <Form
                form={form}
                name={'register-confirm'}
                validateMessages={{required: "필수 입력 값 입니다."}}>
                <Form.Item
                    name={'email'}
                    label={'인증 번호'}
                    rules={[
                        { required: true},
                        // 인증번호 regex
                    ]}
                    colon={false}>
                    <Input placeholder="인증번호 입력"/>
                </Form.Item>

                {/*<Form.Item*/}
                {/*    name={'verify_code'}*/}
                {/*    label={'인증 번호'}*/}
                {/*    rules={[*/}
                {/*        { required: true, message: '필수 입력값입니다.' },*/}
                {/*        {*/}
                {/*            validator: (_, value) =>*/}
                {/*                value ? Promise.resolve() : Promise.reject('유효한 값을 입력해주세요.') // Promise.resolve() 대신 fetch result*/}
                {/*        }*/}
                {/*    ]}*/}
                {/*    colon={false}>*/}
                {/*    <Search placeholder="인증번호 입력" enterButton="인증 확인" size="large" onSearch={() => {*/}
                {/*        // dispatch submit verify code*/}
                {/*    }} />*/}
                {/*</Form.Item>*/}

                <SubmitButton htmlType={'submit'} onClick={onSubmit} type={'primary'} block>
                    인증 확인
                </SubmitButton>
            </Form>
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
export default RegisterConfirm;