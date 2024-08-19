import React from 'react';
import classNames from 'classnames';

const PageContainer = ({ bodyClass, children }) => {
  const classes = classNames('preview-card', bodyClass);
  return <div className={classes}>{children}</div>;
};

export default PageContainer;
