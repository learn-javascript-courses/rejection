import React, { Fragment } from 'react';
import Emoji from '../emoji/emoji';
import PropTypes from 'prop-types';

const Score = ({ total }) => {
  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col bg-quote d-flex justify-content-center my-3">
          <p className="quote">
            By making a game of rejection one conquers fear.
          </p>
          <Emoji symbol={'😣'} label={'fire'} />
        </div>
      </div>
      <div className="row">
        <div className="col splash d-flex justify-content-center">
          <img src="/img/rejectionMonster.png" />
          <span id="score" className="3d_effect">
            {total}
          </span>
        </div>
      </div>

      <style jsx>{`
        .splash {
          font-family: vt323;
          color: rgba(4, 191, 157, 0.7);
        }

        img {
          max-width: 70%;
        }

        #score {
          position: absolute;
          bottom: 20%;
          left: 20%;
          font-size: 20em;
        }

        .bg-quote {
          max-width: 70%;
        }

        .quote {
          color: #393939;
        }

        @media (max-width: 576px) {
          #score {
            font-size: 8em;
          }
        }

        @media (min-width: 576px) {
          #score {
            font-size: 20em;
          }
        }
      `}</style>
    </Fragment>
  );
};

Score.propTypes = {
  total: PropTypes.number,
};

export default Score;
