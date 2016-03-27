angular.module('app', ['ui.router', 'ngMaterial'])
.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/dashboard.html',
      title: "Dashboard"
    })

    .state('about', {
      url: '/about',
      templateUrl: '../views/about.html',
      title: "About"
    })

    .state('contact', {
      url: '/contact',
      templateUrl: '../views/contact.html',
      title: "Contact"
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