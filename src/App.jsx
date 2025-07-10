import React, { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);

  // Static rates (relative to USD)
  const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    INR: 83,
    AUD: 1.50,
    CAD: 1.35,
    CNY: 7.25,
    JPY: 157.8,
    CHF: 0.90,
    SEK: 10.7,
    NZD: 1.62,
    SGD: 1.35,
    HKD: 7.83,
    RUB: 90.3,
    ZAR: 18.2,
    MXN: 17.0,
    BRL: 5.3,
    KRW: 1372.5,
    AED: 3.67,
    THB: 36.4,
  };

  const currencyOptions = Object.keys(rates);

  const handleConvert = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) {
      setResult("Please enter a valid number");
      return;
    }

    const rate = rates[toCurrency] / rates[fromCurrency];
    const converted = amt * rate;
    setResult(`${amt} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Currency Converter</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Amount Input */}
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-gray-700 font-medium mb-1">Amount</label>
            <input
              type="text"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* From Currency */}
          <div className="flex flex-col">
            <label htmlFor="from" className="text-gray-700 font-medium mb-1">From</label>
            <select
              id="from"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          {/* To Currency */}
          <div className="flex flex-col">
            <label htmlFor="to" className="text-gray-700 font-medium mb-1">To</label>
            <select
              id="to"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleConvert}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Convert
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6 text-center text-xl font-semibold text-green-700">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
