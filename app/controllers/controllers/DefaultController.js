const BaseController = require('./BaseController');

class DefaultController extends BaseController {
    
    constructor() {
        super();
    }

    getPageNotFound(res) {
        return this.view(res, "page-not-found")
    }
}

module.exports = DefaultController;