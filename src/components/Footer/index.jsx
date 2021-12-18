import React from 'react';
import * as S from './styles';

function Footer() {
  return (
    <S.FooterConteiner>
      Proudly made by{' '}
      <a target="_blank" href="https://github.com/JCDMeira" rel="noreferrer">
        Jean Meira
      </a>
    </S.FooterConteiner>
  );
}

export { Footer };
