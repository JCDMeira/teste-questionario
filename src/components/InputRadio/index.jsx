import React from 'react';
import P from 'prop-types';
import * as S from './styles';

import { Field, ErrorMessage } from 'formik';
import { MyErrorMessage } from '../ErrorMessage';
// eslint-disable-next-line no-unused-vars
function InputRadio({ name, options, correct }) {
  // console.log(correct);

  return (
    <S.InputConteiner>
      <div className="form-control">
        <Field name={name}>
          {({ field }) => {
            return options.map((option, index) => {
              return (
                <div className="content" key={index}>
                  <input
                    type="radio"
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label className="inputLabel" htmlFor={option.value}>
                    {option.value}
                  </label>
                </div>
              );
            });
          }}
        </Field>
        <ErrorMessage component={MyErrorMessage} name={name} />
      </div>
    </S.InputConteiner>
  );
}

InputRadio.propTypes = {
  name: P.string.isRequired,
  options: P.array.isRequired,
  correct: P.string.isRequired,
};
export { InputRadio };
