const BaseModel = require('./BaseModel');

class ItemModel extends BaseModel {
  constructor() {
    super();
    this.setCollection('items');

   

  }
}

module.exports = new ItemModel();