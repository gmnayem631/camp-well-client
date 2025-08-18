import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../../Components/Loading";
import { FaRupeeSign } from "react-icons/fa";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { id } = useParams();
  const axios = useAxios();

  console.log(id);

  const { isPending, data: campInfo = {} } = useQuery({
    queryKey: ["camps", id],
    queryFn: async () => {
      const res = await axios.get(`/camps/${id}`);
      return res.data;
    },
  });

  if (isPending) {
    return <Loading></Loading>;
  }
  console.log("camp info", campInfo);
  const fee = campInfo.fees;
  const feeInCents = fee * 100;
  console.log(feeInCents);

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

    // payment intent
    const res = await axios.post("/create-payment-intent", { feeInCents });
    const clientSecret = res.data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Joe",
        },
      },
    });

    console.log("res from intent", res);
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
        Pay ${fee}
      </button>
      {error && <p className="text-error">{error}</p>}
    </form>
  );
};

export default PaymentForm;
