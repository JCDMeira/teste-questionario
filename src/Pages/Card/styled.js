import styled from 'styled-components';

export const QuizCard = styled.div`
  width: 93.33333333333333vw;
  max-width: 600px;
  height: 600px;
  background: var(--secundary-color);
  border-radius: 5px;
  margin-bottom: 2.5rem;
  border: 2px solid var(--tertiary-color);
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleDiv {
    width: 100%;
    height: 53px;
    background: var(--primary-color);
    border: 2px solid var(--tertiary-color);
    box-sizing: border-box;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-weight: bold;
      font-size: 2.2rem;
      line-height: 2.6rem;
      text-align: center;

      color: var(--secundary-color);
    }
  }

  .title {
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: var(--white);
    text-align: center;
    margin: 48px 00 24px 0;
    padding: 0 36px;
  }

  .input {
    margin-top: 24px;
    width: 120px;
    height: 30px;

    background: var(--white);
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: roboto;
    font-size: 16px;
    text-align: right;

    &:focus {
      box-shadow: 0px 0px 6px 8px rgba(22, 205, 217, 0.25);
    }
  }

  .formConteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
  }

  .score {
    color: var(--white);
    margin-top: 30px;
    width: 60%;

    h1 {
      margin-bottom: 15px;
      text-align: center;
    }

    h2 {
      margin-bottom: 10px;
    }
  }
`;
