(function () {
  'use strict';

  var likeComponent = Vue.extend({
    template: '<button>Like</button>'
  });

  var components = new Vue({
    el: '#components',
    components: {
      'like-component': likeComponent
    }
  });
})();