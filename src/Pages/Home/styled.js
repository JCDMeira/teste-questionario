import styled from 'styled-components';
import Button from '@mui/material/Button';

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  color: '#395173',
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#16CDD9',
  borderColor: '#16CDD9',
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
    backgroundColor: '#59D6DF',
    borderColor: '#59D6DF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#59D6DF',
    borderColor: '#59D6DF',
  },
  '&:focus': {
    boxShadow: `rgba(89, 214, 223, 0.8)`,
  },
});
