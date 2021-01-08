import React from 'react';
import './ModeSelectRadio.css';

const ModeSelectRadio = props => {
  return (
      <div className="modeSelectBlock">
        <p className="modeTitle">Сумма заказа считается:</p>
        <p className="radioRow">
          <input
              type="radio"
              id="evenRadio"
              name="calcMode"
              value="even"
              onChange={props.onRadioChange}
              checked={props.mode === "even"}
          />
          <label htmlFor="evenRadio">
            Поровну между всеми участниками
          </label>
        </p>
        <p className="radioRow">
          <input
              type="radio"
              id="individualRadio"
              name="calcMode"
              value="individual"
              onChange={props.onRadioChange}
              checked={props.mode === "individual"}
          />
          <label htmlFor="individualRadio">
            Каждому индивидуально
          </label>
        </p>
      </div>
  );
};

export default ModeSelectRadio;