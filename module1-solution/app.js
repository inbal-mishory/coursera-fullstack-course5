(function() {
  'use strict';

  angular.module('mod1',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.lunchList;
    $scope.checkToomuch = function (stringToSplit) {
      if(stringToSplit != undefined){
        var arrayOfStrings = stringToSplit.split(","),
            listLen = 0;
        if(arrayOfStrings.length > 0 && arrayOfStrings.length < 4){
          $scope.msg = "Enjoy!";
          $scope.listLen = arrayOfStrings.length;
        } else {
          $scope.msg = "Too much!"
          $scope.listLen = arrayOfStrings.length;
        }
      } else {
        $scope.listLen = 0;
        $scope.msg = "Please enter data first."
      }
    };

  }
})();
