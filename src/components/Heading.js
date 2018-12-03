import React from 'react';

// ====
const Heading = (props) => {
  const { history } = props;

  return (
    <div className="py-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={history.loading ? './spinner.gif' : './delete-sign.png'}
        alt=""
        width="72"
        height="72"
      />
      <h2>Rejection</h2>
      <p className="lead">You gotta lose to win.</p>
      <p className="h3 monospace mt-5">
        <i className="fa fa-arrow-right" />
        Score:
        {history.data.reduce((t, q) => (q.status === 'rejected' ? t + 10 : t + 1), 0)}
        <i className="fa fa-arrow-left" />
      </p>
    </div>
  );
};

export default Heading;
