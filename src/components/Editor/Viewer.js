import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "tui-editor/dist/tui-editor-contents.css";
// import 'highlight.js/styles/github.css';
import TuiViewer from "tui-editor/dist/tui-editor-Viewer";

const Viewer = (props) => {
  const { initialValue } = props;

  // viewer instance to custom sth
  const [viewerEl, setViewerEl] = useState(null);

  useEffect(() => {
    setViewerEl(
      new TuiViewer({
        el: document.querySelector("#viewerSection"),
        height: "500px",
        initialValue: initialValue,
      })
    );
    // instance.getHtml();
  }, []);

  return (
    <Wrapper>
      <div id="viewerSection"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

Viewer.propTypes = {
  initialValue: PropTypes.string,
};

Viewer.defaultProps = {
  initialValue: "",
};
export default Viewer;
