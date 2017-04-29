import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../store';

import Head from '../components/Head';


const Index = () => (
  <div>
    <Head />
    <div>
      Hello World
    </div>
  </div>
);


export default withRedux(store)(Index);
