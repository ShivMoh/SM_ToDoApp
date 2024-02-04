const ItemModel = require("../../model/models/ItemModel");
const BaseController = require("./BaseController");

class ItemController extends BaseController {
    constructor() {
        super();
        this.setModel(ItemModel)
    }

    create(req, res) {
        function generateRandomInteger(max) {
            return Math.floor(Math.random() * max) + 1;
        }

        if (Object.keys(req.body).length != 0) {            
            var id = generateRandomInteger(9999999).toString();
            this.getModel().create(id, req.body);
        }

        res.end();
    }

    get(res) {
        var data = this.getModel().findAll();
        data.then(snapshot => {
            snapshot.forEach(doc => {
                var name = doc.data().title;
                var description = doc.data().description;
                var dueDate = doc.data().dueDate;
                var status = doc.data().status;

                res.write(`
                    <div 
                        class="task-container ${status}"
                        hx-get="http://localhost:3000/items/find"
                        hx-trigger="click"
                        hx-swap="none"
                        hx-headers='{"Content-type": "application/json"}'
                        hx-vals='{"id": ${doc.id}}'
                        >
                        <div class="task-container-top">
                            <div class="task-due-date">
                                <div class="date ${status}">
                                    Due: ${dueDate}
                                </div>
                            </div>
                            <div class="task-container-decorator-right ${status}"></div>
                        </div>
                        <div class="task-title">${name}</div>
                        <div class="task-description-container">
                            <div class="task-description">
                                ${description}
                            </div>
                        </div>
                        <div class="task-container-bottom">
                            <div class="test-container-blank"></div>
                            <div class="task-button-container">
                                <button 
                                    type="button" title="trash-button" 
                                    class="task-trash-button"
                                    hx-post="http://localhost:4000/items/delete" 
                                    hx-trigger="click" 
                                    hx-swap="none" 
                                    hx-confirm="Are you sure you want to delete?" 
                                    hx-headers='{"Content-type": "application/json"}' 
                                    hx-vals='{"id": ${doc.id}}'
                                    >
                                
                                </button>
                                <button 
                                    type="button" 
                                    title="mark-as-complete-button" 
                                    class="task-mark-as-complete-button"
                                    hx-post="http://localhost:4000/items/update" 
                                    hx-trigger="click" 
                                    hx-swap="none" 
                                    hx-confirm="Mark task as completed?" 
                                    hx-headers='{"Content-type": "application/json"}' 
                                    hx-vals='{
                                        "id": ${doc.id},
                                        "data" : {
                                            "status" : "completed"
                                        }
                                    }'
                                    >
                                    <div class="task-mark-as-complete-inner-button">
                                        
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="task-container-decorator-left-container">
                            <div class="task-container-decorator-left ${status}">

                            </div>
                        </div>
                    </div>
                `);
            });
            res.end();
        }) 
    }

    update(req, res) {
        try {
            if (Object.keys(req.body).length != 0) {
                console.log(req.body);
                this.getModel().update(
                    req.body.id, 
                    JSON.parse(req.body.data)
                );
            } 
            res.end();
        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
    }

    findOne(req, res) {
        console.log("Finding Item");
    }

    getItem(req, res) {
        
        try {

            if (Object.keys(req.body).length != 0) {

                var data = this.getModel().findOne(req.body.id);
              
                data.then(doc => {

                    if (doc !== undefined) {

                        res.write(
                            `
                            <div class="form-container">
                                <img 
                                    class="decoration"
                                    src="./resources/decoration.png" 
                                    alt="fancy decoration"
                                >
                                <form action="">
                                    <div class="input-container">
                                        <label for="title">Title</label>
                                        <input 
                                            type="text" name="title" 
                                            id="title" 
                                            value='${doc.data.title}'
                                            hx-post="http://127.0.0.1:4000/items/update"
                                            hx-trigger="change"
                                            hx-swap="none"
                                            hx-headers='{"Content-type": "application/json"}'
                                            hx-vals='{
                                                "id": ${doc.id},
                                                "data" : {
                                                    "title" : "Task 2"
                                                }
                                            }'
                                            >
                                    </div>
                            
                                    <div class="input-container">
                                        <label for="description">Description</label>
                                        <textarea  
                                            name="description" 
                                            id="description" 
                                            rows=20
                                        >${doc.data.description}
                                        </textarea>
                                    </div>
                            
                                    <div class="input-container">
                                        <label for="due-date">Due Date</label>
                                        <input 
                                            type="text" 
                                            name="due-date" 
                                            id="due-date" 
                                            value='${doc.data.dueDate}'>
                                    </div>    
                                    <div class="status-container">
                                        <p>Status: ${doc.data.status}</p>
                                        <button 
                                            type="button" 
                                            title="mark-as-complete-button" 
                                            class="task-mark-as-complete-button"
                                            hx-post="http://localhost:4000/items/update" 
                                            hx-trigger="click" 
                                            hx-swap="none" 
                                            hx-confirm="Mark task as completed?" 
                                            hx-headers='{"Content-type": "application/json"}' 
                                            hx-vals='{
                                                "id": ${doc.id},
                                                "data" : {
                                                    "status": "completed"
                                                }
                                            }'
                                            >

                                            <div class="task-mark-as-complete-inner-button">
                                        </div>
                                    </button>  
                                    </div>
                                </form>
                            </div>
                            `
                        )
                        res.end();
                    }
                })
            } else {
                res.write("Your mom is gay");
                res.end();
            }

        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
    }

    delete(req, res) {
        try {
            if (Object.keys(req.body) != 0) {
                this.getModel().delete(req.body.id);
            } 
            res.end();
        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
    }
} 

module.exports = ItemController;