import styled from 'styled-components';
import Button from '@mui/material/Button';

export const BootstrapButton = styled(Button)`
  && {
    cursor: pointer;
    box-shadow: none;
    text-transform: none;
    font-size: 16px;
    color: var(--secundary-color);
    padding: 6px 12px;
    border: 2px solid var(--primary-color);
    line-height: 24px;
    background-color: var(--primary-color);
    font-family: ${[
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')};
    :hover: {
      background-color: var(--secundary-color);
      border: 2px solid --secundary-color);
      color: var(--primary-color);
      box-shadow: none;
    }
    :focus: {
      box-shadow: rgba(89; 214; 223; 0.8);
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-color);

  .quiz {
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    margin-bottom: 1rem;
    position: absolute;
    top: 4vh;

    color: var(--secundary-color);
  }

  .jean {
    font-size: 1.6rem;
    color: var(--secundary-color);
    position: absolute;
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
    padding: 0 72px;
  }

  input {
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
    margin-bottom: 24px;

    &:focus {
      box-shadow: 0px 0px 6px 8px rgba(22, 205, 217, 0.25);
    }
  }
`;

export const history = styled.div`
  width: 93.33333333333333vw;
  height: 170px;
  background: var(--secundary-color);
  border-radius: 5px;
  margin-bottom: 2.5rem;
  border: 2px solid var(--tertiary-color);
`;
