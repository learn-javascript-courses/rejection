import React from 'react';
import OAuth from './OAuth';

// ====
const LoginButtons = (props) => {
  const { user, providers, socket } = props;

  const buttons = (providers, socket) => providers.map(provider => <OAuth provider={provider} key={provider} socket={socket} />);

  return (
    <div className={`login-buttons justify-content-center row mt-4 ${user.name ? 'hidden' : ''}`}>
      <div>
        <h2 className="text-center">Sign in</h2>
        <div className="text-center social-btn">{buttons(providers, socket)}</div>
      </div>
    </div>
  );
};

export default LoginButtons;
