(function(){
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;

  service.user = null;

  service.registerUser = function (user) {
    service.user = user;
  };

  service.getUserData = function () {
    return service.user;
  };
}

})();
