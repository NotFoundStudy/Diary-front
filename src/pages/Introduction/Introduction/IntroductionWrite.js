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
        const contents = editorRef.current.getInstance().getHtml();

        if(title && contents){
            const body = {
                password,
                isSecret,
                title,
                contents
            }
            editorCreators.insert(body)
        }else{
            // toast 메세지 출력
            console.log(`title : ${title}, contents : ${contents}`)
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