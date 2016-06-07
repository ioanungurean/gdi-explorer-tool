angular
.module('app')
.controller('ChartsCtrl', ['$scope', 'countryService', ChartsCtrl]);

function ChartsCtrl($scope, countryService) {
  'use strict';

  countryService.getCountries().then(function(data) {
    $scope.countries = data;
  }).catch(function() {
    $scope.error = 'Unable to get the countries';
  });

  $scope.dataRadarChart = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  $scope.selectedCountry;

  $scope.labelsRadarChart = [
    "Human Developement Index",
    "Life Expectancy",
    "Expected Years of Schooling",
    "Mean Years of Schooling",
    "Estimated Gross Income"
  ];

  $scope.series = ['Male', 'Female'];

  $scope.colours = ["rgba(224, 108, 112, 1)", "rgba(224, 108, 112, 1)"];

  $scope.getSelectedCountry = function() {
    if ($scope.selectedCountry !== undefined) {
    $scope.dataRadarChart = [
      [$scope.selectedCountry.hdi_m/0.945, $scope.selectedCountry.le_m/81.2, $scope.selectedCountry.eys_m/16.1, $scope.selectedCountry.mys_m/13.8, $scope.selectedCountry.gni_m/143979],
      [$scope.selectedCountry.hdi_f/0.94, $scope.selectedCountry.le_f/86.8, $scope.selectedCountry.eys_f/20.7, $scope.selectedCountry.mys_f/13.1, $scope.selectedCountry.gni_f/59994],
    ];
      return $scope.selectedCountry.name;
    } else {
      return "Please select an country";
    }
  };

  $scope.dataBarChart = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];

  $scope.labelsBarChart = [
    "GDI",
    "HDI",
    "LE",
    "EYS",
    "MYS",
    "GNI"
  ];

  $scope.getSelectedBarCountry = function() {
    if ($scope.selectedBarCountry !== undefined) {
    $scope.dataBarChart = [
      [$scope.selectedBarCountry.gdi_value, $scope.selectedBarCountry.hdi_m/0.945, $scope.selectedBarCountry.le_m/81.2, $scope.selectedBarCountry.eys_m/19.7, $scope.selectedBarCountry.mys_m/13.8, $scope.selectedBarCountry.gni_m/143979],
      [$scope.selectedBarCountry.gdi_value, $scope.selectedBarCountry.hdi_f/0.94, $scope.selectedBarCountry.le_f/86.8, $scope.selectedBarCountry.eys_f/20.7, $scope.selectedBarCountry.mys_f/13.1, $scope.selectedBarCountry.gni_f/59994],
    ];
      return $scope.selectedBarCountry.name;
    } else {
      return "Please select an country";
    }
  };

  $scope.dataLineChart = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];

  $scope.labelsLineChart = [
    "Gender Developement Index",
    "Human Developement Index",
    "Life Expectancy",
    "Expected Years of Schooling",
    "Mean Years of Schooling",
    "Gross Income"
  ];

  $scope.getSelectedLineCountry = function() {
    if ($scope.selectedLineCountry !== undefined) {
    $scope.dataLineChart = [
      [$scope.selectedLineCountry.gdi_value, $scope.selectedLineCountry.hdi_m/0.945, $scope.selectedLineCountry.le_m/81.2, $scope.selectedLineCountry.eys_m/19.7, $scope.selectedLineCountry.mys_m/13.8, $scope.selectedLineCountry.gni_m/143979],
      [$scope.selectedLineCountry.gdi_value, $scope.selectedLineCountry.hdi_f/0.94, $scope.selectedLineCountry.le_f/86.8, $scope.selectedLineCountry.eys_f/20.7, $scope.selectedLineCountry.mys_f/13.1, $scope.selectedLineCountry.gni_f/59994],
    ];
      return $scope.selectedLineCountry.name;
    } else {
      return "Please select an country";
    }
  };

  $scope.exportImage = function(id) {
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    }
    window.location.href = image;
  };
}