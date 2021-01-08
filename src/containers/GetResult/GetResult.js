import React, {useState} from 'react';
import './GetResult.css';

const GetResult = props => {
  const [result, setResult] = useState(null);

  const getFinalSum = (sum, tipsPerc, del, personQty = 1) => {
    return Math.ceil(parseInt(sum) + (sum * (tipsPerc / 100)) + (parseInt(del) / personQty));
  };

  const calculateResult = mode => {
    let emptyInput = false;
    let checkResult;

    if (mode === 'even') {
      const order = props.data.orderSum;
      const tips = props.data.tipsPercentage;
      const delivery = props.data.deliveryCharge;
      let persons = props.data.personCount;

      if (order === '' || persons === '') {
        emptyInput = true;
      }

      const sum = getFinalSum(order, tips, delivery);
      const pricePerPerson = Math.ceil(sum / persons);

      if (!emptyInput) {
        checkResult = [
          <p key="sum">Общая сумма: <b>{sum}</b>сом</p>,
          <p key="personQty">Количество человек: <b>{persons}</b></p>,
          <p key="sumForEach">Каждый платит по: <b>{pricePerPerson}</b>сом</p>
        ];
      } else {
        checkResult = <p key="empty">Вы не заполнили некоторые поля</p>;
      }

      setResult(checkResult);
    }

    if (mode === 'individual') {
      let order = 0;
      const persons = props.personData;
      let tips = parseInt(props.additionalData.tipsPercentage);
      let delivery = parseInt(props.additionalData.deliveryCharge);

      if (isNaN(tips)) {
        tips = 0;
      }
      if (isNaN(delivery)) {
        delivery = 0;
      }

      for (let i = 0; i < persons.length; i++) {
        if (persons[i].name === '' || persons[i].sum === '') {
          emptyInput = true;
        }

        let sum = 0;

        if (!isNaN(parseInt(persons[i].sum))) {
          sum = (parseInt(persons[i].sum));
        }

        order += sum;
      }

      const sum = getFinalSum(order, tips, delivery);

      if (!emptyInput) {
        checkResult = persons.map((person, index) => {
          const finalSum = getFinalSum(person.sum, tips, delivery, persons.length);

          return (
              <p key={person.name + index}>{person.name}: <b>{finalSum}</b> сом</p>
          );
        });
        checkResult.unshift(<p key="sum">Общая сумма: <b>{sum}</b>сом</p>);
      } else {
        checkResult = <p key="empty">Вы не заполнили некоторые поля</p>;
      }

      setResult(checkResult);
    }
  };

  return (
      <div className="resultBlock">
        <button
            className="button calculateButton"
            onClick={() => calculateResult(props.mode)}
        >
          Расчитать
        </button>
        <div className="checkResult">
          {result}
        </div>
      </div>
  );
};

export default GetResult;