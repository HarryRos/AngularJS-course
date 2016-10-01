(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems)
.directive('itemsLoaderIndicator', itemsLoaderIndicator);

function foundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&',
      msgActive: '='
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function itemsLoaderIndicator() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    service.loading = true;
    return $http(
            {url:'https://davids-restaurant.herokuapp.com/menu_items.json'}
          )
          .then(function (result) {
          // process result and only keep items that match
          service.loading = false;
          var foundItems = [];
          var menuItems = result.data.menu_items;

          for (var i = 0; i < menuItems.length; i++) {
            var item = menuItems[i];
            if (searchTerm && searchTerm.indexOf(" ")===-1) {
              if (item.description.indexOf(searchTerm)!==-1){
                foundItems.push(item);
              };
            };
          };
          console.log(foundItems);

          // function findEl(element){
          //   return
          // };
          // return processed items
          return foundItems;
          });
  };
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController( MenuSearchService){
  var ctrl = this;

  ctrl.search = function(mySearchTerm){
    ctrl.found = undefined;
    ctrl.msgActive = true;
    var promise = MenuSearchService.getMatchedMenuItems(mySearchTerm);
    promise.then(function (result){
      ctrl.found = result;
    });
  };

  ctrl.remove = function(index){
    ctrl.found.splice(index, 1);
    ctrl.msgActive = false;
  };

  ctrl.loading = function(){
    return MenuSearchService.loading;
  };
};
})()
