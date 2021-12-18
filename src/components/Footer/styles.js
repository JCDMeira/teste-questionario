import styled from 'styled-components';

export const FooterConteiner = styled.span`
  font-size: 1.6rem;
  color: var(--secundary-color);
  position: relative;
  bottom: 20px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
  :hover {
    font-size: 1.65rem;
  }
`;
