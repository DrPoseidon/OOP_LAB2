const Composite = require("./Composite");
const Leaf = require("./Leaf");

function createComposite(name) {
  return new Composite(name);
}

function createLeaf(el, name, price, complexity) {
  return el.Add(new Leaf(name, price, complexity));
}

function addTo(el, name) {
  el.Add(createComposite(name));
}

function getStats(el) {
  let price = 0;
  let complexity = 0;
  el.children.forEach((el1) => {
    el1.children.forEach((el2) => {
      price += el2.price;
      complexity += el2.complexity * 30;
    });
  });

  console.log(
    `${el.name}\nЦена: ${price} Р. Время на изготовление: ${complexity / 60} ч.`
  );
}

module.exports = {
  createComposite,
  createLeaf,
  addTo,
  getStats,
};
