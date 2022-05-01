const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

const getCheap = () => {
  // Using the filter chaining to obtain the item will low price
  // This returns an array, just in case we have two items with same low price
  // You can just pick the first index in our case
  const item = items
    .sort((a, b) => {
      return a.price - b.price;
    })
    .filter((item, index, array) => item.price === array[0].price);

  return item[0];
};
const getExpensive = () => {
  // The same as we did in the function above
  // Although the opposite, copying the list
  return items
    .sort((a, b) => {
      return b.price - a.price;
    })
    .filter((item, index, array) => item.price === array[0].price)[0];
};

const getFullPrice = () => {
  // Using the reduce function, we add all items price and return the value
  return items.reduce((sum, item) => item.price + sum, 0);
};

const getFullPriceWithoutCheap = () => {
  // We filter the list to remove all items under 10
  // Using the reduce function, we add all items price and return the value
  return items
    .filter((item) => item.price > 10)
    .reduce((sum, item) => sum + item.price, 0);
};

window.addEventListener("DOMContentLoaded", () => {
  // Waiting for the dom content to be loaded
  const cheap = getCheap();
  const expensive = getExpensive();
  const totalPrice = getFullPrice();
  const totalWithOutCheap = getFullPriceWithoutCheap();
  document.getElementById("answer-1").innerHTML = `
    <p>${cheap.name}: ${cheap.price}</p>
  `;
  document.getElementById("answer-2").innerHTML = `
    <p>${expensive.name}: ${expensive.price.toLocaleString()}</p>
  `;
  document.getElementById("answer-3").innerHTML = `
    <p>All product price: ${totalPrice.toLocaleString()}</p>
  `;
  document.getElementById("answer-4").innerHTML = `
    <p>Total price: ${totalWithOutCheap}</p>
  `;
});
