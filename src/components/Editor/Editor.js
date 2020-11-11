/* eslint-disable react/prop-types */
import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Input, Switch } from "antd";
import { Editor as TestEdit } from "@toast-ui/react-editor";
import "tui-editor/dist/tui-editor.css"; // editor's ui
import "tui-editor/dist/tui-editor-contents.css"; // editor's content
import "codemirror/lib/codemirror.css"; // codemirror

const Editor = (props) => {
  const {
    editorRef,
    onChangeTitle,
    onChangePassword,
    isSecret,
    onChangeIsSecret,
  } = props;

  return (
    <Wrapper>
      <ComponentWrapper>
        <Input id="title" placeholder="제목" onChange={onChangeTitle} />
      </ComponentWrapper>

      <ComponentWrapper>
        <Switch
          onChange={onChangeIsSecret}
          checkedChildren="비밀글"
          unCheckedChildren="공개글"
        />
        <Input
          id="password"
          disabled={!isSecret}
          placeholder="비밀번호"
          onChange={onChangePassword}
        />
      </ComponentWrapper>

      <ComponentWrapper>
        <TestEdit
          hideModeSwitch={true}
          previewStyle="vertical"
          width="100%"
          height="600px"
          initialEditType="wysiwyg"
          placeholder="글쓰기"
          ref={editorRef}
        />
      </ComponentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ComponentWrapper = styled.div`
  margin-bottom: 20px;
`;

Editor.PropTypes = {
  editorRef: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChangeTitle: PropTypes.string,
  onChangePassword: PropTypes.string,
  isSecret: PropTypes.bool,
  onChangeIsSecret: PropTypes.func,
};

Editor.defaultProps = {
  editorRef: <></>,
  onChangeTitle: "",
  onChangePassword: "",
  isSecret: false,
  onChangeIsSecret: () => {},
};

export default memo(Editor);
