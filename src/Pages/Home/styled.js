import styled from 'styled-components';

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

  .quiz {
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    margin-bottom: 2rem;

    color: var(--secundary-color);
  }
`;

export const QuizCard = styled.div`
  width: 93.33333333333333vw;
  height: 264px;
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

  p {
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: var(--white);
    text-align: center;
    margin-top: 24px;
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
`;

export const history = styled.div`
  width: 93.33333333333333vw;
  min-height: 300px;
  background: var(--secundary-color);
  border-radius: 5px;
  margin-bottom: 2.5rem;
  border: 2px solid var(--tertiary-color);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h2 {
    color: var(--white);
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.8rem;

    text-align: center;
    margin-bottom: inherit;
  }

  .historicConteiner {
    div {
      width: 60vw;
      height: 40px;

      background: var(--white);
      border-radius: 5px;
      margin-bottom: 16px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
        text-align: center;

        color: var(--secundary-color);
      }
    }
  }

  .resetButton {
    position: relative;
    bottom: 10px;
  }
`;
