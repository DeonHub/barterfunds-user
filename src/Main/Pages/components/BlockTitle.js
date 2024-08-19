import React from 'react';
import classNames from 'classnames';

const BlockTitle = ({ tag: Tag, className, children }) => {
  const classes = classNames('block-title', className);
  return <Tag className={classes}>{children}</Tag>;
};

export default BlockTitle;
