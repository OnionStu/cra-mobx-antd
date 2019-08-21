/**
 * Store 根节点，用于各模块Store之间的互相调用
 */
class RootStore {
  constructor(Stores) {
    for (const module in Stores) {
      if ({}.hasOwnProperty.call(Stores, module)) {
        this[module] = new Stores[module](this);
      }
    }
  }

  addStore(store) {}
}

export default RootStore;
