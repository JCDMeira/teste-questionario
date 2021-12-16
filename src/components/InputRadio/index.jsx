/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import P from 'prop-types';
import * as S from './styles';

import { Field, ErrorMessage } from 'formik';
function InputRadio({ label, name, options, ...rest }) {
  return (
    <S.InputConteiner className="errorMessage">
      <div className="form-control">
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div className="content" key={option.key}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label className="inputLabel" htmlFor={option.value}>
                    {option.key}
                  </label>
                </div>
              );
            });
          }}
        </Field>
        <ErrorMessage component={ErrorMessage} name={name} />
      </div>
    </S.InputConteiner>
  );
}

InputRadio.propTypes = {};
export { InputRadio };
