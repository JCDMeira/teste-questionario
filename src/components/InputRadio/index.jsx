import React from 'react';
import P from 'prop-types';
import * as S from './styles';

function InputRadio({ children }) {
  return (
    <S.ErrorConteiner className="errorMessage">
      <input type="radio" name={children} />
      <label htmlFor="">{children}</label>
    </S.ErrorConteiner>
  );
}

InputRadio.propTypes = {
  children: P.string.isRequired,
};
export { InputRadio };
