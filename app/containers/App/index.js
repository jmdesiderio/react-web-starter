import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css/sanitize.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import withProgressBar from '../../components/ProgressBar';
import s from './styles.scss';

export function App (props) {
  return (
    <div className={s.wrapper}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' }
        ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node
};

export default withProgressBar(App);
