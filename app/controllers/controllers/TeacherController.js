const fs = require('fs');
const BaseController = require('./BaseController');
const { user } = require('../../model/models/UserModel');

class TeacherController extends BaseController {
    

    constructor() {
        super();
        
    }

    get(res) {
        res.write("Hello world");
        res.end();
    }
   
    getAllTeachers(res) {
        res.write(`
        <div class="task-container">
            <div class="task-container-top">
                <div class="task-due-date">
                    <div class="date">
                        Due: yyyy-mm-dd
                    </div>
                </div>
                <div class="task-container-decorator-right"></div>
            </div>
            <div class="task-title">Finish Something Important</div>
            <div class="task-description-container">
                <div class="task-description">
                    This is a description of the task to be completed. This is a description of the task to be completed. The task is about something important I'm sure
                </div>
            </div>
            <div class="task-container-bottom">
                <div class="test-container-blank"></div>
                <div class="task-button-container">
                    <div class="task-trash-button"></div>
                    <div class="task-mark-as-complete-button">
                        <div class="task-mark-as-complete-inner-button">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="task-container-decorator-left-container">
                <div class="task-container-decorator-left">
        
                </div>
            </div>
        </div>
    
        `);
        res.end();
        // return fs.readFile('C:/Users/shive/OneDrive/Documents/Web Development/NodejsPractice/01_PracticeApp/app/views/students.html', "utf8", function(err, data) {
        //     res.write(data);
        //     res.end();
          
        // });
    }
}

module.exports = TeacherController