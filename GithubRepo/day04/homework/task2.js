var MyTask = /** @class */ (function () {
    function MyTask() {
        console.log(this);
    }
    MyTask.prototype.display = function () {
        console.log(this);
    };
    return MyTask;
}());
this;
;
var mytask = new MyTask();
mytask.display();
// nameFun();
