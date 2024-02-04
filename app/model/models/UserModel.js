const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
    constructor() {
        super();
        this.setCollection("users")
    }
}

module.exports.user = new UserModel();

