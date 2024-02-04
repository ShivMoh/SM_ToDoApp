const fs = require('fs');
const path = require('path');
const {resolve} = require('path');

class BaseController {
    #model;

    constructor() {
        
    }

    view(res, viewName) {

        const filepath = resolve(
            __dirname, 
            path.join("../../views/", viewName+".html")
        );

        return fs.readFile(filepath, "utf8", function(err, data) {
            res.write(data);
            res.end();
        });
    }

    setModel(model) {
        this.#model = model;
    }

    getModel() {
        return this.#model;
    }
}

module.exports = BaseController;