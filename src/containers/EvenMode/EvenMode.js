import React, {useState} from 'react';
import GetResult from "../GetResult/GetResult";
import "./EvenMode.css";

const EvenMode = props => {
  const [evenCalc, setEvenCalc] = useState({
    personCount: 0,
    orderSum: 0,
    tipsPercentage: 0,
    deliveryCharge: 0
  });

  const onValueChange = e => {
    const evenCalcCopy = {...evenCalc};
    evenCalcCopy[e.target.id] = e.target.value;

    setEvenCalc(evenCalcCopy);
  };

  return (
      <>
        <div className="evenModeBlock">
          <div className="inputRow">
            <label htmlFor="personCount" className="inputLabel">Человек:</label>
            <input type="number" className="inputField" id="personCount" onChange={onValueChange} />
            <p className="inputUnits">чел.</p>
          </div>
          <div className="inputRow">
            <label htmlFor="orderSum" className="inputLabel">Сумма заказа:</label>
            <input type="number" className="inputField" id="orderSum" onChange={onValueChange} />
            <p className="inputUnits">сом</p>
          </div>
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
        <GetResult data={evenCalc} mode={props.mode} />
      </>
  );
};

export default EvenMode;