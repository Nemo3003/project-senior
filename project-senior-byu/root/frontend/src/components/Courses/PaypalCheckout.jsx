import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = () =>{

  return(
    <PayPalScriptProvider
  options={{ "client-id": "EG547YiOelGLpdKBDKTmtXHMyH4nPK2UmGM-6W3U31GhinCQPjpMbqDX__Y6eNVmQep59ARzIThqzPCM" }}
>
  <PayPalButtons
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "13.99",
            },
          },
        ],
      });
    }}
    onApprove={async (data, actions) => {
      const details = await actions.order.capture();
      const name = details.payer.name.given_name;
      alert("Transaction completed by " + name);
    }}
  />
</PayPalScriptProvider>
  )
  
}

export default PaypalCheckoutButton;