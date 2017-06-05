import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../src/store';
import Login from '../src/Login/Login';
import Head from '../src/head/head';

const Index = () =>
  <div>
    <Head />
    <Login />
  </div>;

export default withRedux(store)(Index);
