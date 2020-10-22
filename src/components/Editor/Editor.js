import React from 'react';
import styled from "styled-components";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
// https://github.com/nhn/tui.editor/tree/master/apps/react-editor#-usage

const Editor = (props) => {

    return (
        <Wrapper>
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Editor;