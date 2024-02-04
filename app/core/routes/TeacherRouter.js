
const TeacherController = require('../../controllers/controllers/TeacherController');

class TeacherRouter {

    #isPageFound = false;
    #controller = null;

    constructor(req, res) {
        this.#isPageFound = this.#router(req, res);
        this.#controller = new TeacherController();
    }

    #router(req, res) {
    
        switch (req.url) {
            case "/teachers":
                new TeacherController().get(res);
                return true
                break;
            default:
                return false
                break;
        }
    }

    pageFound() {
        return this.#isPageFound;
    }
}

module.exports = TeacherRouter;