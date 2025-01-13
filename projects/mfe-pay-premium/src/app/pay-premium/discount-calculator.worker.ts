/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const { amount, discount } = data;
  const finalAmount = amount - amount * discount; // Add discount (or surcharge)
  postMessage({ finalAmount });
});
