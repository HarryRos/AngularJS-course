(function () {
"use strict";

angular.module('public')
.component('newUserForm', {
  templateUrl: 'src/public/user/newsletter/new-user-form.html',
  controller: newUserFormController
});

newUserFormController.$inject = ['$http', 'ApiPath', 'UserService'];
function newUserFormController($http, ApiPath, UserService){
  var $ctrl = this;
  $ctrl.favIsValid = false;
  $ctrl.regSuccess = false;
  $ctrl.user = UserService.getUserData();

  $ctrl.submit = function(){
    UserService.registerUser($ctrl.user);
    $ctrl.regSuccess = true;
  };

  $ctrl.checkFavValid = function(short_name){
    if (short_name){
      $http.get(ApiPath + '/menu_items/' + short_name + '.json')
      .then(function(response) {
        $ctrl.user.fav = response.data.short_name;
        $ctrl.user.favData = response.data;
        $ctrl.favIsValid = true;
      })
      .catch(function(e) {
        $ctrl.favIsValid = false;
      });
    }
    else {
      $ctrl.favIsValid = false;
    }
  };

};

})();
