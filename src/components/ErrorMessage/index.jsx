import React from 'react';
import P from 'prop-types';
import * as S from './styles';

function MyErrorMessage({ children }) {
  return (
    <S.ErrorConteiner className="errorMessage">{children}</S.ErrorConteiner>
  );
}

MyErrorMessage.propTypes = {
  children: P.string.isRequired,
};
export { MyErrorMessage };
