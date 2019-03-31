(function () {
  'use strict';

  var likeComponent = Vue.extend({
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
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