import React, {useState} from 'react';
import GetResult from "../GetResult/GetResult";
import IndividualModePersonRow from "../../components/IndividualModePersonRow/IndividualModePersonRow";
import "./IndividualMode.css";

const IndividualMode = props => {
  const [personList, setPersonList] = useState(
      [{name: '', sum: ''}]
  );

  const [individualCalc, setIndividualCalc] = useState({
    tipsPercentage: '',
    deliveryCharge: ''
  });

  const addPerson = () => {
    const newPerson = {name: '', sum: ''};
    const personListCopy = [...personList];
    personListCopy.push(newPerson);

    setPersonList(personListCopy);
  };

  const personNameChange = e => {
    const personCopy = {...personList[e.target.parentElement.id]};
    personCopy.name = e.target.value;

    const personListCopy = [...personList];
    personListCopy[e.target.parentElement.id] = personCopy;

    setPersonList(personListCopy);
  };

  const personSumChange = e => {
    const personCopy = {...personList[e.target.parentElement.id]};
    personCopy.sum = e.target.value;

    const personListCopy = [...personList];
    personListCopy[e.target.parentElement.id] = personCopy;

    setPersonList(personListCopy);
  };


  const removePerson = e => {
    const personListCopy = [...personList];
    personListCopy.splice(parseInt(e.target.parentElement.id), 1);

    setPersonList(personListCopy);
  };

  const onValueChange = e => {
    const individualCalcCopy = {...individualCalc};
    individualCalcCopy[e.target.id] = e.target.value;

    setIndividualCalc(individualCalcCopy);
  };

  const people = personList.map((item, itemIndex) => {
    return (
        <IndividualModePersonRow
            key={itemIndex}
            id={itemIndex}
            name={item.name}
            onNameChange={personNameChange}
            sum={item.sum}
            onSumChange={personSumChange}
            remove={removePerson}
        />
    );
  });

  return (
      <>
        <div className="individualModeBlock">
          {people}
          <button className="button addPersonButton" type="button" onClick={addPerson}>+</button>
          <div className="inputRow">
            <label htmlFor="tipsPercentage" className="inputLabel">Процент чаевых:</label>
            <input type="number" className="inputField" id="tipsPercentage" onChange={onValueChange} />
            <p className="inputUnits">%</p>
          </div>
          <div className="inputRow">
            <label htmlFor="deliveryCharge" className="inputLabel">Доставка:</label>
            <input type="number" className="inputField" id="deliveryCharge" onChange={onValueChange} />
            <p className="inputUnits">сом</p>
          </div>
        </div>
        <GetResult mode={props.mode} personData={personList} additionalData={individualCalc} />
      </>
  );
};

export default IndividualMode;