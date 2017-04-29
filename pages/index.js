import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../store';
import { Provider } from 'react-redux';
import Main from '../containers/MainContainer';
import Head from '../components/Head';


const Index = (props) => {
  return (
      <div>
       <Head />
         <Main />
       </div>
  );
}


export default withRedux(store)(Index);
