(function () {
"use strict";

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryItems','$stateParams'];
function ItemsController(categoryItems,$stateParams) {
  var $ctrl = this,
      categoryName = $stateParams.categoryShortName;
  $ctrl.itemsForCategory = categoryItems;
  $ctrl.categoryName = categoryName;
  console.log(categoryName);
}


})();
