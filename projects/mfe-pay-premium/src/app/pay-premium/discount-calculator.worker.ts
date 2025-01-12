/// <reference lib="webworker" />

// addEventListener('message', ({ data }) => {
//   const amount = data;
//   const discount = amount > 1000 ? 0.1 : 0.05; // Example discount logic
//   const discountedAmount = amount - amount * discount;
//   postMessage({ discount, discountedAmount });
// });
/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const { amount, discount } = data;
  if (amount && discount) {
    const discountedAmount = amount - amount * discount;
    postMessage({ discountedAmount });
  } else {
    postMessage({ error: 'Invalid input' });
  }
});
