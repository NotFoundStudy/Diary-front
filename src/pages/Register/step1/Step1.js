import React from 'react';
import styled from "styled-components";
import {Button, Checkbox, Form, Mentions} from "antd";

const { Option, getMentions } = Mentions;

const step1 = (props) => {

    const [form] = Form.useForm();

    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            console.log('Submit:', values);
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };

    const checkMention = async (rule, value, callback) => {
        const mentions = getMentions(value);

        if (mentions.length < 2) {
            throw new Error('More than one must be selected!');
        }
    };

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <Wrapper>
           <Form onFinish={onFinish}>
               <Form.Item>
                   <Mentions rows="3" placeholder="You can use @ to ref user here">
                       <Option value="afc163">afc163</Option>
                       <Option value="zombieJ">zombieJ</Option>
                       <Option value="yesmeck">yesmeck</Option>
                   </Mentions>
               </Form.Item>
           </Form>
            <Checkbox onChange={onChange}>위 약관에 동의합니다.</Checkbox>
            <Button>다음 단계</Button>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default step1;