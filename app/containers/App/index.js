import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import s from './styles.scss';

const App = ({ children }) => (
  <div className={s.root}>
    <Helmet titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
      meta={[
        {
          name: 'description',
          content: 'A React.js Boilerplate application'
        }
      ]} />
    <Header />
    {React.Children.toArray(children)}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
