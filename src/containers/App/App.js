import React, {useState} from 'react';
import './App.css';
import ModeSelectRadio from "../../components/ModeSelectRadio/ModeSelectRadio";
import EvenMode from "../EvenMode/EvenMode";
import IndividualMode from "../IndividualMode/IndividualMode";

const App = () => {
  const [calcMode, setCalcMode] = useState('even');

  let calcBlock = null;

  if (calcMode === 'even') {
    calcBlock = <EvenMode mode={calcMode} />;
  } else if (calcMode === 'individual') {
    calcBlock = <IndividualMode mode={calcMode} />;
  }

  const onRadioChange = e => {
    setCalcMode(e.target.value);
  };

  return (
      <div className="App">
        <ModeSelectRadio mode={calcMode} onRadioChange={onRadioChange} />
        {calcBlock}
      </div>
  );
}

export default App;
