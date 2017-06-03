import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../src/store';
import Main from '../src/MainContainer';
import Head from '../src/head/head';
import Nav from '../src/navbar/navbar';

const Index = props => (
  <div>
    <Head />
    <Main />
  </div>
);

export default withRedux(store)(Index);
