(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuDataService',
                      function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                      }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsController',
      controllerAs: 'itemCtrl',
      resolve: {
        categoryItems: ['MenuDataService','$stateParams',
              function (MenuDataService,$stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
              }]
      }
    })
  }
})();
