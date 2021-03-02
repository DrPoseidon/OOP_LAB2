const Component = require("./Component");

module.exports = class Composite extends Component {
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
};
