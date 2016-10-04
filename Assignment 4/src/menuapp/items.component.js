(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    allItems: '<'
  }
});

})();
