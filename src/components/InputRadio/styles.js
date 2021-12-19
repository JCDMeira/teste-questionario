import styled from 'styled-components';

export const InputConteiner = styled.div`
  .content {
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;
    background-color: var(--white);
    width: 60vw;
    max-width: 283px;
    min-height: 31px;
    margin-top: 15px;
    input {
      margin-right: 10px;
    }
    .inputLabel {
      font-size: 1.4rem;
      color: var(--secundary-color);
    }
  }
`;
