const DefaultController = require('../../controllers/controllers/DefaultController');

class DefaultRouter  {
    #isPageFound = false;
    #controller = null;

    constructor(res) {
        this.#controller = new DefaultController();
        this.#router(res);
    }

    #router(res) {
        this.#controller.getPageNotFound(res);
    }
}   

module.exports = DefaultRouter;