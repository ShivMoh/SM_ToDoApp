
const ItemController = require('../../controllers/controllers/ItemController');

class ItemRouter {
    #isPageFound = false;
    #controller = null;

    constructor(req, res) {
        this.#controller = new ItemController();
        this.#isPageFound = this.#router(req, res);
    } 

    #router(req, res) {
   
        switch (req.url) {
            case "/items":
                this.#controller.get(res);
                return true;
                break
            case "/items/create":
                this.#controller.create(req, res);
                return true;
                break;
            case "/items/update":
                this.#controller.update(req, res);
                return true;
                break;
            case "/items/find":
                this.#controller.findOne(req, res);
                return true;
                break;
            case "/items/getItem":
                this.#controller.getItem(req, res);
                return true;
                break;
            case "/items/delete":
                this.#controller.delete(req, res);
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

module.exports = ItemRouter;