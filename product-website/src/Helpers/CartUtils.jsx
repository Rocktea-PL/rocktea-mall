// cartUtils.js

export const calculateSubtotal = (carts) => {
  let subtotal = 0;

  if (carts && carts.length > 0) {
    carts.forEach((data) => {
      if (data.items && data.items.length > 0) {
        data.items.forEach((cart) => {
          subtotal += cart.price * cart.quantity;
        });
      }
    });
  }

  return subtotal;
};

export const calculateTotal = (carts, deliveryCost, discount) => {
  const subtotal = calculateSubtotal(carts);
  const total = subtotal + deliveryCost - discount;
  return total;
};

/*export const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    // Remove commas and convert to a number
    const itemPrice = parseFloat(item.price.replace(/,/g, ""));

    const totalForItem = itemPrice * item.cartItems.quantity;
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
};*/
