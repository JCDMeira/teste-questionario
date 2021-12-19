import styled from 'styled-components';
import { history } from '../Home/styled';

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
