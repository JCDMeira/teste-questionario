import { css } from 'styled-components';

export const Size = ({ height, maxHeight, maxWidth, width }) => css`
  block-size: ${height};
  inline-size: ${width};
  max-block-size: ${maxHeight};
  max-inline-size: ${maxWidth};

  @supports not (block-size: ${height}) {
    height: ${height};
    maxHeight: ${maxHeight};
  }

  @supports not (inline-size: ${width}) {
    max-width. ${maxWidth};
    width: ${width};
  }
`;
