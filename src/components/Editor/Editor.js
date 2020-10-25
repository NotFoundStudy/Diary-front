import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import TuiEditor from 'tui-editor';
import 'tui-editor/dist/tui-editor.css'; // editor's ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor's content
import 'codemirror/lib/codemirror.css'; // codemirror

const Editor = (props) => {

    const [editorEl, setEditorEl] = useState(null);

    useEffect(()=>{
        setEditorEl(
            new TuiEditor({
                el: document.querySelector('#editorSection'),
                hideModeSwitch: true,
                initialEditType: 'markdown', // wysiwyg
                previewStyle: 'vertical',
                height: '300px',
                events: {
                    // load : '',
                    // change: '',
                    // stateChange: '',
                    focus: () => console.log('@@ focus'),
                    blur:  () => console.log('@@ blur')
                },
                hooks: {
                    addImageBlobHook: () => console.log('@@ abc'), // type [addImageBlobHook] ?
                }
            })
        );
        // editorEl.getHtml();
    },[])
    
    useEffect(()=>{
        if(editorEl){
            console.log('@@ editorEl.getUI().getToolbar()', editorEl.getUI().getToolbar());
            console.log('@@ eidotrEl.getCodeMirror()', editorEl.getCodeMirror());
            console.log('@@ editorEl.getCurrentModeEditor()', editorEl.getCurrentModeEditor());
            console.log('@@ editorEl.getCurrentPreviewStyle()', editorEl.getCurrentPreviewStyle());
            console.log('@@ editorEl.getHtml()', editorEl.getHtml());
            console.log('@@ editorEl.getRange()', editorEl.getRange());
            console.log('@@ editorEl.getSelectedText()', editorEl.getSelectedText());
            console.log('@@ editorEl.getSquire()', editorEl.getSquire());
            console.log('@@ editorEl.getUI()', editorEl.getUI());
        }

    },[editorEl])

    return (
        <Wrapper>
            <div id="editorSection"></div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Editor;