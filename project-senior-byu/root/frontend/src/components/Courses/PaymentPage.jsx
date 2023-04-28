import React, { useState } from "react";
import axios from "axios";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paymentData = { cardNumber, cardName, expiryMonth, expiryYear, cvc };
    try {
      const response = await axios.post("/api/payment", paymentData);
      console.log(response.data);
      // handle success
    } catch (error) {
      console.log(error.response.data);
      // handle error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        className="p-10 bg-white rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6">Payment Information</h2>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            placeholder="**** **** **** ****"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cardName">
            Name on Card
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardName"
            type="text"
            placeholder="John Doe"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryMonth">
              Expiry Month
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiryMonth"
              type="text"
              placeholder="MM"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
            />
            </div>
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryYear">
              Expiry Year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiryYear"
              type="text"
              placeholder="YYYY"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              required
            />
              </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="cvc">
        CVC
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="cvc"
        type="text"
        placeholder="***"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        required
      />
    </div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Pay Now
    </button>
  </form>
</div>
)}

export default PaymentPage;