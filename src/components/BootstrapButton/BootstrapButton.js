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
import Button from '@mui/material/Button';
import { styled as mui } from '@mui/material/styles';

export const BootstrapButton = mui(Button)({
  color: 'var(--white)',
  marginTop: '24px',
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
