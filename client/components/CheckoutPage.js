import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {
//   useStripe,
//   useElements,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
// } from '@stripe/react-stripe-js';

// const CARD_ELEMENT_OPTIONS = {
//   style: {
//     base: {
//       lineHeight: '27px',
//       color: '#212529',
//       fontSize: '1.1rem',
//       '::placeholder': {
//         color: '#aab7c4',
//       },
//     },
//     invalid: {
//       color: '#fa755a',
//       iconColor: '#fa755a',
//     },
//   },
// };

// export default function CheckoutForm(props) {
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }
//   };

//   return (
//     <div>
//       <h4 className="d-flex justify-content-between align-items-center mb-3">
//         <span className="text-muted">Pay with card</span>
//       </h4>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label htmlFor="cc-name">Name on card</label>
//             <input
//               id="cc-name"
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="cc-email">Email</label>
//             <input
//               id="cc-email"
//               type="text"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-12 mb-3">
//             <label htmlFor="cc-number">Card Number</label>
//             <CardNumberElement
//               id="cc-number"
//               className="form-control"
//               options={CARD_ELEMENT_OPTIONS}
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label htmlFor="expiry">Expiration Date</label>
//             <CardExpiryElement
//               id="expiry"
//               className="form-control"
//               options={CARD_ELEMENT_OPTIONS}
//             />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="cvc">CVC</label>
//             <CardCvcElement id="cvc" className="form-control" options={CARD_ELEMENT_OPTIONS} />
//           </div>
//         </div>

//         <hr className="mb-4" />
//         <button className="btn btn-dark w-100" type="submit" disabled={loading}>
//           {loading ? (
//             <div className="spinner-border spinner-border-sm text-light" role="status"></div>
//           ) : (
//             `PAY ₹${props.amount}`
//           )}
//         </button>
//         {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
//       </form>
//     </div>
//   );
// }

// function App() {
//     const [paymentCompleted, setPaymentCompleted] = useState(false);

//     return (
//       <div className="container">
//         <div className="py-5 text-center">
//           <h4>Stripe Integration - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h4>
//         </div>

//         <div className="row s-box">
//           {paymentCompleted ? successMessage() : <div>
//             <div className="col-md-5 order-md-2 mb-4">
//               {cart()}
//             </div>
//             <div className="col-md-7 order-md-1">
//               <Elements stripe={stripePromise}>
//                 <CheckoutForm amount={2000} setPaymentCompleted={setPaymentCompleted} />
//               </Elements>
//             </div>
//           </div>}
//         </div>

//       </div>
//     );
//   }

//   export default App;
