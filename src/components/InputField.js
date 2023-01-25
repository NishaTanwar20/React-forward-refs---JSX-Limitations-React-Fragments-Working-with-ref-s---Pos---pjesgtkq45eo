import '../styles/App.css';

import React, { forwardRef } from 'react';

const InputField = forwardRef((props, ref) => {
  return (
    <div>
      <input id="input" ref={ref} />
    </div>
  );
});

export default InputField;