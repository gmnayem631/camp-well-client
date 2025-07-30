import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { id } = useParams();
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <CardElement className="p-2 border rounded"></CardElement>
      <button
        type="submit"
        disabled={!stripe}
        className="btn btn-secondary w-full text-white"
      >
        Pay
      </button>
      {error && <p className="text-error">{error}</p>}
    </form>
  );
};

export default PaymentForm;
