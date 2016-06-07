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

  $scope.selectedCountry;

  $scope.data = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];

  $scope.getSelectedCountry = function() {
    if ($scope.selectedCountry !== undefined) {
    $scope.data = [
      [$scope.selectedCountry.hdi_m/0.945, $scope.selectedCountry.le_m/81.2, $scope.selectedCountry.eys_m/16.1, $scope.selectedCountry.mys_m/13.8, $scope.selectedCountry.gni_m/143979],
      [$scope.selectedCountry.hdi_f/0.94, $scope.selectedCountry.le_f/86.8, $scope.selectedCountry.eys_f/20.7, $scope.selectedCountry.mys_f/13.1, $scope.selectedCountry.gni_f/59994],
    ];
      console.log($scope.selectedCountry.hdi_f)
      return $scope.selectedCountry.name;
    } else {
      return "Please select an country";
    }
  };

  $scope.series = ['Male', 'Female'];

  $scope.colours = ["rgba(224, 108, 112, 1)", "rgba(224, 108, 112, 1)"];

  countryService.getCountries().then(function(data) {
    $scope.countries = data;
  }).catch(function() {
    $scope.error = 'Unable to get the countries';
  });
}