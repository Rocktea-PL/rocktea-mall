// cartUtils.js

export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const wholesalePrice = parseFloat(item.product_data.product_variants[0].wholesale_price);
      const retailPrices = parseFloat(item.store_variants[0].retail_price);
      const itemTotal = wholesalePrice + retailPrices;
      const totalForItem = itemTotal * item.cartQuantity;
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
  