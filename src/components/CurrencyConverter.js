import React from "react";
import { useState } from "react";
import axios from "axios";
import ExchangeRate from "./ExchangeRate";


const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "LTC", "XRP", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/laskin",
      params: {
        from_currency: chosenPrimaryCurrency, function: "CURRENCY_EXCHANGE_RATE", to_currency: chosenSecondaryCurrency}
      }

    axios.request(options).then((response) => {
        console.log(response.data)
        setResult(response.data * amount)

        setExchangeRate(response.data)


      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h2>Kryptovaluutta-laskuri</h2>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Valuutta: </td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency} //showing visuals right
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>Yhteensä: </td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>


        <button type="Button" class="btn btn-secondary btn-sm btn-block " id="convert-button" onClick={convert}>
          Laske
        </button>
      </div>

      <ExchangeRate
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={chosenPrimaryCurrency}
        chosenSecondaryCurrency={chosenSecondaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
