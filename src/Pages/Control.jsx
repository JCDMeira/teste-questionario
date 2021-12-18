import React, { useState } from 'react';
import P from 'prop-types';
import Home from './Home/index';
import { ShowAttempt } from './ShowAttempt/index.jsx';

function Control({ history }) {
  const [controlPage, setControlPage] = useState({ page: 'Home', data: {} });

  const handlePage = (page, data = {}) => {
    console.log(page, data);
    setControlPage({ page, data });
  };

  return (
    <>
      {
        {
          Home: <Home setPage={handlePage} history={history} />,
          Show: <ShowAttempt setPage={handlePage} data={controlPage.data} />,
        }[controlPage.page]
      }
    </>
  );
}

Control.propTypes = {
  history: P.object.isRequired,
};

export { Control };
