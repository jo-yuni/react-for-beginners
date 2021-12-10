import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const onChange = (event) => {
    setValue(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, id) => (
            <option key={id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <div>
        <label htmlFor="USD">USD</label>
        <input
          onChange={onChange}
          type="number"
          value={value}
          id="USD"
        />
      </div>
      <div>
        <label htmlFor="BTC">BTC</label>
        <input
          value={value * 0.000021}
          id="BTC"
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
