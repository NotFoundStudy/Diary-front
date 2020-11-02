import React, {memo, useState, useRef} from 'react';
import {editorCreators} from "../../../redux/actionCreators";

import {Button} from 'antd'
import styled from "styled-components";
import Editor from '../../../components/Editor/Editor'

const IntroductionWrite = (props) => {

    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [isSecret, setIsSecret] = useState(false);
    const [password, setPassword] = useState('');

    const onClickWriteBtn = () => {
        const post = editorRef.current.getInstance().getHtml();

        if(title && post){
            const body = {
                password,
                isSecret,
                title,
                post
            }
            editorCreators.insert(body)
        }else{
            // toast 메세지 출력
            console.log(`title : ${title}, post : ${post}`)
        }
    }

    const onChangeTitle = (e) => {
        const {value} = e.target;
        setTitle(value);
    }

    const onChangePassword = (e) => {
        const {value} = e.target;
        setPassword(value);
    }

    return (
        <Wrapper>
            <Editor
                onChangeTitle={onChangeTitle} 
                onChangeIsSecret = {setIsSecret}
                onChangePassword={onChangePassword}
                isSecret = {isSecret}
                editorRef={editorRef}
            />
            <Button onClick={onClickWriteBtn}>작성하기</Button>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default memo(IntroductionWrite);