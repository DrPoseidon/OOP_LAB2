// AssemblyUnits Price AssemblyTime Number of parts / components used
// PurchasedComponents Price
// ElementaryDetails Price

class Component {
  static countElems = 0;
  constructor() {
    this.parentsNum = 0;
    this.elemPrefix = "";
    this.id = Component.countElems;
    Component.countElems++;
  }

  ShowHierarchy() {
    this.elemPrefix = this.setPrefixLength(this.parentsNum);
  }

  setPrefixLength(count) {
    let pre = "";
    for (let i = 0; i < count; i++) {
      pre += "----";
    }
    return pre;
  }
}

class Composite extends Component {
  constructor(name) {
    super();
    this.children = [];
    this.name = name;
    // console.log("Composite created");
  }

  Add(elem) {
    elem.parentsNum = this.parentsNum + 1;
    elem.parentId = this.id;
    elem.name = `${elem.name} ${this.children.length + 1}`;
    this.children.push(elem);
  }

  ShowHierarchy() {
    super.ShowHierarchy();
    console.log(this.elemPrefix + this.name + " (Composite)");
    for (var i in this.children) this.children[i].ShowHierarchy();
  }
}

class Leaf extends Component {
  constructor(name, price, complexity) {
    super();
    this.name = name;
    this.price = price;
    this.complexity = complexity;
    // console.log("Leaf created");
  }

  ShowHierarchy() {
    super.ShowHierarchy();
    console.log(this.elemPrefix + this.name);
  }
}

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

let arr = [];
arr.push(createComposite("САПР"));
let CAD = arr[0];
//////////////////////////////
addTo(CAD, "Сборочные единицы");

let assemblyUnits = CAD.children[0];

addTo(assemblyUnits, "Детали");
addTo(assemblyUnits, "Компонент");

let elementaryDetails = assemblyUnits.children[0];
let purchasedComponents = assemblyUnits.children[1];

createLeaf(elementaryDetails, "Деталька", 200, 3);
createLeaf(elementaryDetails, "Деталька", 300, 4);

createLeaf(purchasedComponents, "Компонентик", 200, 1);
createLeaf(purchasedComponents, "Компонентик", 500, 4);

getStats(assemblyUnits);

//////////////////////////////
addTo(CAD, "Сборочные единицы");

let assemblyUnits1 = CAD.children[1];

addTo(assemblyUnits1, "Детали");
addTo(assemblyUnits1, "Компонент");

let elementaryDetails1 = assemblyUnits1.children[0];
let purchasedComponents1 = assemblyUnits1.children[1];

createLeaf(elementaryDetails1, "Деталька", 200, 3);

createLeaf(purchasedComponents1, "Компонентик", 200, 1);

getStats(assemblyUnits1);
////////////////////////////

CAD.ShowHierarchy();
