import React, {useState} from 'react';
import styled from "styled-components";
import {navigate} from "../../helper/historyHelper";

const Register = (props) => {

    // login.js 카피본 => ui 재구성 필요

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return (
        <Wrapper>
            <Top>
                <TopText>Register</TopText>
            </Top>
            <AppSlogan>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p>adipisicing elit. Ipsam, pariatur?</p>
            </AppSlogan>

            <Input type={'text'}
                   placeholder={'ID'}
                   value={id}
                   onChange={(e) => setId(e.target.value)}/>
            <Input type={'text'}
                   placeholder={'PASSWORD'}
                   value={pw}
                   onChange={(e) => setPw(e.target.value)}/>

            <ButtonSend onClick={()=>{}}>Register</ButtonSend>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Top = styled.div`
  width: 100%;
  padding: 20px 15px;
  background:#08c;
`;
const TopText = styled.div`
  font-size: 17px;
  font-weight: 400;
  color:#fff;
`;
const AppSlogan = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const Input = styled.input`
  width: 50%;
  height: 56px;
  border-radius: 10px;
  border:1px solid #d4d4d4;
  padding: 5px 18px;
  font-size: 15px;
  font-weight: 400;
  color:#000;
  &+ &{
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
  background:#08c;
  cursor:pointer;
  font-size: 17px;
  font-weight: 400;
  color:#fff;
`;

const Helps = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px;
  > div {
    margin-left: 15px;
    text-decoration: underline;
    font-size: 13px;
    color:#999;
    cursor:pointer;
    &:nth-child(1){
      margin-left: 0;
    }
  }
`;
export default Register;