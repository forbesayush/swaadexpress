// SWAAD EXPRESS CART AND BILL LOGIC
// The cart is a plain object: { dishId: quantity }.

const MAX_PER_DISH = 10;   // F2: at most 10 portions of one dish (kitchen capacity)

// "₹249" -> 249
function priceValue(price) {
  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
}

function addToCart(cart, id) {
  const qty = cart[id] || 0;
  if (qty < MAX_PER_DISH) cart[id] = qty + 1;
  return cart;
}

function changeQty(cart, id, delta) {
  const qty = (cart[id] || 0) + delta;
  if (qty <= 0) delete cart[id];
  else if (qty <= MAX_PER_DISH) cart[id] = qty;
  return cart;
}

// Turns the cart into rows: dish, quantity, line total.
function cartLines(cart, menu) {
  return menu
    .filter((item) => cart[item.id])
    .map((item) => ({ item, qty: cart[item.id], lineTotal: priceValue(item.price) * cart[item.id] }));
}

// The food total: the sum of every line.
function cartTotal(cart, menu) {
  return cartLines(cart, menu).reduce((sum, line) => sum + line.lineTotal, 0);
}

// The bill, with GST shown on its own line.
const GST_RATE = 0.05;   // restaurant GST rate (5%)

function billSummary(cart, menu) {
  const food = cartTotal(cart, menu);
  const gst = Math.round(food * GST_RATE * 100) / 100;
  return { food: food, gstRate: GST_RATE, gst: gst, total: Math.round((food + gst) * 100) / 100 };
}

if (typeof module !== "undefined") {
  module.exports = { MAX_PER_DISH, priceValue, addToCart, changeQty, cartLines, cartTotal, billSummary };
}
