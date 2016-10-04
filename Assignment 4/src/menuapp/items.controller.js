(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'category'];
function ItemsController(MenuDataService, category) {
  var items = this;
  items.allItems = category.menu_items;
  items.categoryName = category.category.name;
}

})();
