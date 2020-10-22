import React from 'react';
import styled from "styled-components";
// import 'codemirror/lib/codemirror.css';
// import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

// https://github.com/nhn/tui.editor/blob/master/apps/editor/docs/viewer.md

const Viewer = (props) => {

    // const viewer = new Viewer({
    //     el: document.querySelector('#viewer'),
    //     height: '600px',
    //     initialValue: '# hello'
    // });
    //
    // viewer.getHtml();

    return (
        <Wrapper>
           <Viewer/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Viewer;