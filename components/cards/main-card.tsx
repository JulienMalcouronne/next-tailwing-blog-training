'use client';
import React from 'react';

import CardHeader from './card-content/card-header';
import CardFooter from './card-content/card-footer';

const MainCard = (props: JSX.ElementChildrenAttribute) => {
  let header;
  let footer;
  let content: JSX.Element[] = [];

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === CardHeader) {
      header = child;
    } else if (child.type === CardFooter) {
      footer = child;
    } else {
      content.push(child);
    }
  });

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg">
      {header}
      {content}
      {footer}
    </div>
  );
};

export default MainCard;
