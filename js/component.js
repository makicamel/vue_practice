(function () {
  'use strict';

  var likeComponent = Vue.extend({
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">Like {{ count }}</button>',
    methods: {
      countUp: function () {
        this.count++;
      }
    }
  });

  var components = new Vue({
    el: '#components',
    components: {
      'like-component': likeComponent
    }
  });
})();