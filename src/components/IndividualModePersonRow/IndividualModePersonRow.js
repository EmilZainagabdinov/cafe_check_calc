import React from 'react';
import './IndividualModePersonRow.css';

const IndividualModePersonRow = props => {
  return (
      <div className="personRow" id={props.id}>
        <input type="text" className="personName" onChange={props.onNameChange} value={props.name} />
        <input type="number" className="personIndividualSum" onChange={props.onSumChange} value={props.sum} />
        <p className="sumCurrency">сом</p>
        <button className="button removePersonButton" type="button" onClick={props.remove}>X</button>
      </div>
  );
};

export default IndividualModePersonRow;