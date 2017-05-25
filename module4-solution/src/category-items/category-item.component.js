(function () {
"use strict";

angular.module('Data')
.component('categoryItem', {
  templateUrl: 'src/category-items/category-item.html',
  bindings: {
    category: '<'
  }
});

})();
