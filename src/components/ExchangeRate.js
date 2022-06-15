import React from "react";

const ExchangeRate = ({
  exchangeRate,
  chosenPrimaryCurrency,
  chosenSecondaryCurrency,
}) => {
  return (
    <div className="exchange-rate">
      <h3>Vaihtokurssi</h3>
      <h1>{exchangeRate}</h1>
      <p>
        {chosenPrimaryCurrency} on {chosenSecondaryCurrency}
      </p>
      {exchangeRate}
    </div>
  );
};

export default ExchangeRate;
