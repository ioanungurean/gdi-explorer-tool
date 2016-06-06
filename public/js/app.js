angular.module('app', ['ui.router', 'ngMaterial', 'md.data.table', 'chart.js'])
.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html',
      title: "Home"
    })

    .state('data', {
      url: '/data',
      templateUrl: '../views/data.html',
      controller: 'CountryCtrl',
      title: "Data"
    })

    .state('charts', {
      url: '/charts',
      templateUrl: '../views/charts.html',
      controller: 'ChartsCtrl',
      title: "Charts"
    })

     .state('about', {
      url: '/about',
      templateUrl: '../views/about.html',
      title: "About"
    })

     .state('update_data', {
      url: '/update_data',
      templateUrl: '../views/update_data.html',
      title: "Update Data"
    });

    $urlRouterProvider.otherwise('/');

    var userTheme = localStorage.getItem('theme');
    if (userTheme === null) {
      $mdThemingProvider.theme('default').primaryPalette('red');
    }
    else {
      $mdThemingProvider.theme('default').primaryPalette(userTheme);
    }

    $mdThemingProvider.theme('red').primaryPalette('red');
    $mdThemingProvider.theme('teal').primaryPalette('teal');
    $mdThemingProvider.theme('brown').primaryPalette('brown');
    $mdThemingProvider.theme('indigo').primaryPalette('indigo');

    $mdThemingProvider.alwaysWatchTheme(true);

    $locationProvider.html5Mode(true);
}])
.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $state.transitionTo('home');
}]);