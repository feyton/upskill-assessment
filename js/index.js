const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

const getCheap = () => {
  // we copy the list items and then sort on it
  return items.slice().sort((a, b) => {
    return a.price - b.price;
  });
};
const getExpensive = () => {
  // We copy the list items before we sort the values
  return items.slice().sort((a, b) => {
    //   We are return the largest value among the two.
    return b.price - a.price;
  });
};

const getFullPrice = () => {
  let price = 0;
  items.forEach((item) => {
    price += parseInt(item.price);
  });

  return price.toLocaleString();
};
const getFullPriceWithoutCheap = () => {
  let price = 0;
  items.forEach((item) => {
    if (item.price > 10) {
      price += parseInt(item.price);
    }
  });

  return price.toLocaleString();
};

window.addEventListener("DOMContentLoaded", () => {
  // for the first question to return
  console.log(getCheap());
  console.log(getExpensive());
  console.log(getFullPrice());
  console.log(getFullPriceWithoutCheap());
});
