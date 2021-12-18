import styled from 'styled-components';
import { history } from '../Home/styled';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-color);
  position: relative;
  padding-top: 20px;
`;

export const ShowContent = styled(history)`
  min-height: 80vh;
  h1 {
    color: var(--white);
    font-size: 22px;
    margin-bottom: 16px;
  }
  h2 {
    margin: 10px 0;
    font-size: 18px;
  }
`;

export const resultContent = styled.div`
  .your {
    font-weight: normal;
    color: ${({ result }) => (result === 'true' ? 'green' : 'tomato')};
  }
  .correct {
    font-weight: normal;
    color: green;
  }
`;
