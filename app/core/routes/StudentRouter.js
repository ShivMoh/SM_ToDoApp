
const StudentController = require('../../controllers/controllers/StudentController');

class StudentRouter {
    #isPageFound = false;
    #controller = null;

    constructor(req, res) {
        this.#controller = new StudentController();
        this.#isPageFound = this.#router(req, res);
    } 

    #router(req, res) {
   
        switch (req.url) {
            case "/students":
                // this.#controller.getAllStudents(res);
                this.#controller.getAllStudents(res);
                return true;
                break
            case "/students/create":
                res.write("Student will be created");
                res.end();
                return true;
                break;
            case "/students/update":
                res.write("Student will be updated");
                res.end();
                return true;
                break;
            default:
                return false;
                break;
        }
    }

    pageFound() {
        return this.#isPageFound;
    }
}

module.exports = StudentRouter;