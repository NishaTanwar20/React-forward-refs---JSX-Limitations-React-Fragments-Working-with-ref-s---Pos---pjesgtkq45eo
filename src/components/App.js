import '../styles/App.css';
import React, { useRef } from 'react';
import InputField from './InputField';

const App = () => {
  const inputRef = useRef(null);

  const settingValue = () => {
    const input = inputRef.current.value;
    document.getElementById('textarea').value = input;
  }

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <InputField ref={inputRef} />
      <button id="settingValueButton" onClick={settingValue}>Set Value</button>
      <button id="focusInputButton" onClick={focusInput}>Focus Input</button>
      <textarea id="textarea"></textarea>
    </div>
  );
};

export default App;
