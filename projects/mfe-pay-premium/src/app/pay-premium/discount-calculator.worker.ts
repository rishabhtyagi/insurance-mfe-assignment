/// <reference lib="webworker" />

// addEventListener('message', ({ data }) => {
//   const amount = data;
//   const discount = amount > 1000 ? 0.1 : 0.05; // Example discount logic
//   const discountedAmount = amount - amount * discount;
//   postMessage({ discount, discountedAmount });
// });
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});