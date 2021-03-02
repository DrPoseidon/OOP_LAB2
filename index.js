// AssemblyUnits Price AssemblyTime Number of parts / components used
// PurchasedComponents Price
// ElementaryDetails Price

const { createComposite, createLeaf, addTo, getStats } = require("./functions");

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
