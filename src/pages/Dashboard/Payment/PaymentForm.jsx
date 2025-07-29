import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  console.log(id);

  const { isPending, data: campInfo = {} } = useQuery({
    queryKey: ["camps", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/camps/${id}`);
      return response.data;
    },
  });

  React.useEffect(() => {
    if (!campInfo?.fees) return;

    axiosSecure
      .post("/create-payment-intent", { amount: campInfo.fees })
      .then((res) => {
        console.log("Client Secret:", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.error("Failed to create payment intent:", err);
      });
  }, [campInfo, axiosSecure]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity w-20 h-20"></span>
      </div>
    );
  }
  console.log(campInfo);
  //   const amount = campInfo.cost;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("payment method", paymentMethod);

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        setError(confirmError.message);
      } else {
        console.log("Payment successful:", paymentIntent);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <CardElement />
      <button
        className="btn btn-secondary w-full text-white"
        type="submit"
        disabled={!stripe}
      >
        Pay $
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default PaymentForm;
