const Database = require("../database/db");

class BaseModel {
    #db;
    #collection;
    
    constructor() {
        this.#db = new Database();
    }

    create(id, data) { 
        this.#db.write(this.#collection, id, data);
        console.log("Creation Success!");   
    }

    findOne(id) {
        return this.#db.read(this.#collection, id);
    }

    findAll() {
        return this.#db.readAll(this.#collection);
    }

    update(id, data) {
        this.#db.update(this.#collection, id, data);
    }

    delete(id) {
        this.#db.remove(this.#collection, id);
    }

    setCollection(collection) {
        this.#collection = collection;
    }

    getCollection() {
        return this.#collection;
    }
    
}

module.exports = BaseModel;
