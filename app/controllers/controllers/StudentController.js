const fs = require('fs');
const BaseController = require('./BaseController');
const {user} = require('../../model/models/UserModel');

class StudentController  extends BaseController {

    constructor() {
        super();
        this.setModel(user);
    }

    getAllStudents(res) {
        this.view(res, "students");
    }
    
}

module.exports = StudentController;