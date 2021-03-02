module.exports = class Component {
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
};
