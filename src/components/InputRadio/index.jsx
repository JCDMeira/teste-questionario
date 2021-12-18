import React from 'react';
import P from 'prop-types';

// # formik and validation
import { Field, ErrorMessage } from 'formik';

// # my styles
import * as S from './styles';

// # my components
import { MyErrorMessage } from '../ErrorMessage';
function InputRadio({ name, options, onClick }) {
  return (
    <S.InputConteiner>
      <div className="form-control">
        <Field name={name}>
          {({ field }) => {
            return options.map((option, index) => {
              return (
                <div className="content" key={index}>
                  <input
                    onClick={onClick}
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

// - prop validation
InputRadio.propTypes = {
  name: P.string.isRequired,
  options: P.array.isRequired,
  onClick: P.func.isRequired,
};

export { InputRadio };
