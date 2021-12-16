import styled from 'styled-components';
import Button from '@mui/material/Button';

// export const BootstrapButton = styled(Button)`
//   && {
//     cursor: pointer;
//     box-shadow: none;
//     text-transform: none;
//     font-size: 16px;
//     color: var(--secundary-color);
//     padding: 6px 12px;
//     border: 2px solid var(--primary-color);
//     line-height: 24px;
//     background-color: var(--primary-color);
//     font-family: ${[
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(',')};
//     :hover: {
//       background-color: red;
//       border: 2px solid var(--secundary-color);
//       color: white;
//       box-shadow: none;
//     }
//     :focus: {
//       box-shadow: 0px 0px 4px 6pxrgba(89, 214, 223, 0.8);
//     }
//   }
// `;

// ! importação do styled do mui.
import { styled as mui } from '@mui/material/styles';

export const BootstrapButton = mui(Button)({
  cursor: 'pointer',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'var(--primary-color)',
  borderColor: 'var(--primary-color)',
  fontFamily: [
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
  ].join(','),
  '&:hover': {
    backgroundColor: 'var(--secundary-color)',
    borderColor: 'var(--primary-color)',
    boxShadow: '0px 0px 2px 4px rgba(89, 214, 223, 0.8)',
  },
  '&:active': {
    backgroundColor: 'var(--ecundary-color)',
    borderColor: 'var(--primary-color)',
    boxShadow: '0px 0px 2px 4px rgba(89, 214, 223, 0.8)',
  },
  '&:focus': {
    boxShadow: '0px 0px 2px 4px rgba(89, 214, 223, 0.8)',
  },
});

// !

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-color);

  .quiz {
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    margin-bottom: 2rem;

    color: var(--secundary-color);
  }

  .jean {
    font-size: 1.6rem;
    color: var(--secundary-color);
    position: absolute;
    top: 770px;
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
    margin-bottom: 24px;

    &:focus {
      box-shadow: 0px 0px 6px 8px rgba(22, 205, 217, 0.25);
    }
  }

  .formConteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const history = styled.div`
  width: 93.33333333333333vw;
  height: 300px;
  background: var(--secundary-color);
  border-radius: 5px;
  margin-bottom: 2.5rem;
  border: 2px solid var(--tertiary-color);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--white);
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.8rem;

    text-align: center;
    margin-bottom: inherit;
  }

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
`;
