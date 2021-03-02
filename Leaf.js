const Component = require("./Component");

module.exports = class Leaf extends Component {
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
};
