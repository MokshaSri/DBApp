import React from 'react';

const Preview = ({ jsonData }) => {
  return (
    <div>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default Preview;
