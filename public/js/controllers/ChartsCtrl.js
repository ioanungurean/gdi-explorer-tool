angular
.module('app')
.controller('ChartsCtrl', ['$scope', 'countryService', ChartsCtrl]);

function ChartsCtrl($scope, countryService) {
  'use strict';

  $scope.labels = [ "Human Developement Index",
                    "Life Expectancy",
                    "Expected Years of Schooling",
                    "Mean Years of Schooling",
                    "Estimated Gross Income" ];

  $scope.data = [
    [65, 59, 90, 81, 56],
    [28, 48, 40, 19, 96]
  ];

  $scope.series = ['Male', 'Female'];

  $scope.colours = ["rgba(224, 108, 112, 1)", "rgba(224, 108, 112, 1)"];

  countryService.getCountries().then(function(data) {
    $scope.countries = data;
  }).catch(function() {
    $scope.error = 'Unable to get the countries';
  });
}