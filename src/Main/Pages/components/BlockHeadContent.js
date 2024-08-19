import React from 'react';
import classNames from 'classnames';

const BlockHeadContent = ({ className, children }) => {
  const classes = classNames('block-head-content', className);
  return <div className={classes}>{children}</div>;
};

export default BlockHeadContent;
