// cartUtils.js

export const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    // Remove commas and convert to a number
    const itemPrice = parseFloat(item.selectedPrice.replace(/,/g, ""));

    const totalForItem = itemPrice * item.cartQuantity;
    return total + totalForItem;
  }, 0);
};

export const calculateDiscount = () => {
  // Replace with your actual discount logic
  const discount = 12; // Placeholder value
  return discount;
};

export const calculateDeliveryCost = () => {
  // Replace with your actual delivery cost logic
  const deliveryCost = 120; // Placeholder value
  return deliveryCost;
};

export const calculateEstimatedTotal = (cartItems) => {
  const discount = calculateDiscount();
  const deliveryCost = calculateDeliveryCost();
  const calculatedTotal = calculateTotal(cartItems);
  const estimatedTotal = calculatedTotal - discount + deliveryCost;
  return estimatedTotal;
};
