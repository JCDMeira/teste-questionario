import React from 'react';
import P from 'prop-types';
import * as S from './style';
import { Footer } from '../../components/Footer';
import { BootstrapButton } from '../../components/BootstrapButton/BootstrapButton';
import { Wrapper } from '../../components/Wrapper/Wrapper';

function ShowAttempt({
  setPage,
  data: { numberOfQuestions, correct, resultQuestions },
}) {
  return (
    <Wrapper>
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

        <BootstrapButton onClick={() => setPage('Home')}>
          voltar
        </BootstrapButton>
      </S.ShowContent>
      <Footer />
    </Wrapper>
  );
}

ShowAttempt.propTypes = {
  setPage: P.func.isRequired,
  data: P.object.isRequired,
};

export { ShowAttempt };
