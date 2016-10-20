(function () {
"use strict";

angular.module('public')
.controller('UserController', UserController);

UserController.$inject = ['user'];
function UserController(user) {
  var $ctrl = this;

  $ctrl.user = user;

  $ctrl.isValid = function(){
    return ($ctrl.user !== null);
  };
}

})();
