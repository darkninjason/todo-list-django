define(function(require, exports, module) {

    var Todo     = require('app/todos/models/todo').Todo,
        backbone = require('backbone');

    var TodoList = backbone.Collection.extend({
        model: Todo,

        url: '/api/v1/todo/',

        parse: function(data){
            return data.objects;
        }
    });

    exports.TodoList = TodoList; 

});
