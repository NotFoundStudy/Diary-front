import {css} from 'styled-components'

export const multiEllipsis = (height = 0, line = 2) => css`
  overflow:hidden;
  text-overflow:ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
  height: ${height}px;
`;

export const pxToRem = (v) => {
    return `${v / 16}rem`;
};
