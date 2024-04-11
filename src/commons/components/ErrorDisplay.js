import React from 'react';

const ErrorDisplay = ({ childeren }) => {
  return <div>{childeren}</div>;
};

export default React.memo(ErrorDisplay);
