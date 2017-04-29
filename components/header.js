import React from 'react';

export default () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row" style={styles.title}>
        <span className="mdl-layout-title">Rejection App</span>
        <div className="mdl-layout-spacer" />
        <nav className="mdl-navigation">
          <User />
        </nav>
      </div>
    </header>
  </div>
);

const styles = {
  title: {
    paddingLeft: '20px',
  },
  btn: {
    color: '#FFF',
  },
};
