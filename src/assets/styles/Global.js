import { createGlobalStyle } from 'styled-components';
import { Variables } from './_variables';
import { Normalize } from './_normalize';

export const GlobalStyled = createGlobalStyle`
  ${Variables}
  ${Normalize}
`;
