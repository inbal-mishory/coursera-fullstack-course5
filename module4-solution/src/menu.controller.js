(function () {
"use strict";

angular.module('MenuApp')
.controller('MenuController', MenuController);

MenuController.$inject = ['menuCategories'];
function MenuController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
