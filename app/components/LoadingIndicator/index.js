import React from 'react';

import s from './styles.scss';

const LoadingIndicator = () => (
  <div className={s.root}>
    <div className={s.loading} />
  </div>
);

export default LoadingIndicator;
