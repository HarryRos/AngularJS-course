(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];

function  LunchCheckController($scope){

  $scope.lunch = '';
  $scope.message = '';
  $scope.LunchItemsQty = 0;

  $scope.checkTooMuch = function (){
    var lunchItems = $scope.lunch.split(',');


    var spaceCount = lunchItems.filter(function(x){return x==''}).length;
    var lunchItemsQty = lunchItems.length -spaceCount;
    $scope.LunchItemsQty = lunchItemsQty;


    if (lunchItemsQty == 0){
      $scope.message = 'Please enter data first';
      $scope.fontColor = 'redColor'
      $scope.borderColor = 'redBorder';
    }
    else if (lunchItemsQty <= 3) {
      $scope.message = 'Enjoy!';
      $scope.fontColor = 'greenColor'
      $scope.borderColor = 'greenBorder';
    }
    else {
      $scope.message = 'Too much!';
      $scope.fontColor = 'greenColor'
      $scope.borderColor = 'greenBorder';
    }

  };

};

})();
