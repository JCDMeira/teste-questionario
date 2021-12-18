import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-color);
  position: relative;
  padding-top: 20px;

  .quiz {
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    margin-bottom: 2rem;

    color: var(--secundary-color);
  }
`;
