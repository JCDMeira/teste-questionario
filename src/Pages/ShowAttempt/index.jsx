import React from 'react';
import P from 'prop-types';
import * as S from './style';

function ShowAttempt({
  setPage,
  data: { numberOfQuestions, correct, resultQuestions },
}) {
  return (
    <S.Wrapper>
      <S.ShowContent>
        <h1>
          {' '}
          Score {correct}/{numberOfQuestions}
        </h1>
        {resultQuestions.map((item, index) => {
          return (
            <S.resultContent
              key={index}
              result={String(item.answer === item.correctAnswer)}
            >
              <h2>
                {index + 1} - {item.question}
              </h2>
              <h2 className="your">Your answer: {item.answer}</h2>
              <h2 className="correct">Correct answer: {item.correctAnswer}</h2>
            </S.resultContent>
          );
        })}

        <button onClick={() => setPage('Home')}>voltar</button>
      </S.ShowContent>
    </S.Wrapper>
  );
}

ShowAttempt.propTypes = {
  setPage: P.func.isRequired,
  data: P.object.isRequired,
};

export { ShowAttempt };
