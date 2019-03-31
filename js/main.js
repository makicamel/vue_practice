(function () {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        {
          title: 'task 1',
          isDone: false
        }, {
          title: 'task 2',
          isDone: true
        }, {
          title: 'task 3',
          isDone: false
        }
      ]
    },
    methods: {
      addItem: function () {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function (index) {
        if (confirm('are u sure?')) {
          this.todos.splice(index, 1);
        }
      }
    }
  });

})();