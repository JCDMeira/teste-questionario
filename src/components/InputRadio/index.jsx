import React from 'react';
import P from 'prop-types';
import * as S from './styles';

import { Field, ErrorMessage } from 'formik';
import { MyErrorMessage } from '../ErrorMessage';
function InputRadio({ name, options }) {
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
                    value={option.value}
                    checked={field.value === option.value}
                    {...field}
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
};
export { InputRadio };
