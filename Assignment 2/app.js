(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var toBuyList = this;
  var list = ShoppingListCheckOffService;

  toBuyList.items = list.getToBuyListItems();

  toBuyList.buyItem = function(idx){
    list.buyItem(idx);
  };

  toBuyList.isEmpty = function(){
    return list.toBuyListIsEmpty();
  };
};

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var boughtList = this;
  var list = ShoppingListCheckOffService;

  boughtList.items = list.getBoughtListItems();

  boughtList.isEmpty = function(){
    return list.boughtListIsEmpty();
  };
};

function ShoppingListCheckOffService(){
var service = this;

var toBuyList = [
  {name: 'Frozen Pizzas', quantity: 2},
  {name: 'Frozen Vegs', quantity: '1 bag'},
  {name: 'Cheese', quantity: '300gr'},
  {name: 'Beer', quantity: '5 botttles'},
  {name: 'Kitchen Paper', quantity: '1 package'},
  {name: 'Fruit', quantity: '10 Kg'},
];
var boughtList = [];

this.buyItem = function(idx){
  var item = toBuyList.splice(idx, 1);
  boughtList.push(item[0]);
};

this.getToBuyListItems = function(){
  return toBuyList;
};

this.getBoughtListItems = function(){
  return boughtList;
};

this.toBuyListIsEmpty = function(){
  return toBuyList.length === 0;
};

this.boughtListIsEmpty = function(){
  return boughtList.length === 0;
};

};


})()
