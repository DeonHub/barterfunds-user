import React from 'react';
import classNames from 'classnames';

const BlockHead = ({ size, wide, className, children }) => {
  const classes = classNames(`block-head`, `block-head-${size}`, `block-head-wide-${wide}`, className);
  return <div className={classes}>{children}</div>;
};

export default BlockHead;
