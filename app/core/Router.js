const fs = require('fs');
const config = require('./config');

const {
    TeacherRouter,
    StudentRouter,
    ItemRouter,
    DefaultRouter,
} = require("./routes/initRoutes");

class Router {
    
    constructor(req, res) {
        res.writeHead(200, config.HTTP_HEADERS);
        this.#router(req, res);
    }

    #router(req, res) {
        if (new TeacherRouter(req, res).pageFound()) return;
        if (new StudentRouter(req, res).pageFound()) return;
        if (new ItemRouter(req, res).pageFound()) return;
        new DefaultRouter(res);
        return;
    }
}

module.exports = Router;





