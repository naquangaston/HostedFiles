var tasklist = require('tasklist');

var l=tasklist(function(err, tasks) {
    if (err) throw err; // TODO: proper error handling
    var appList = tasks.filter(function(task) {
      return task.imageName.indexOf('ll_') === 0;
    }).map(function(task) {
      return {
        id   : task.pid, // XXX: is that the same as your `id`?
        name : task.imageName,
      };
    });
  });
console.log(l)  