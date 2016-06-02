angular
.module('app')
.controller('CountryCtrl', ['countryService', '$mdEditDialog', '$q', '$scope', '$timeout', CountryCtrl]);

function CountryCtrl(countryService, $mdEditDialog, $q, $scope, $timeout) {
  'use strict';

  $scope.selected = [];
  $scope.limitOptions = [5, 10, 25, 50, 100, 200];

  $scope.options = {
    rowSelection: true,
    multiSelect: false,
    autoSelect: true,
    boundaryLinks: true,
    limitSelect: true,
    pageSelect: true
  };

  $scope.query = {
    order: 'index',
    limit: 10,
    page: 1
  };

  countryService.getCountries().then(function(data) {
    $scope.countries = data;
  }).catch(function() {
    $scope.error = 'Unable to get the countries';
  });

  $scope.toggleLimitOptions = function () {
    $scope.limitOptions = [5, 10, 25, 50, 100, 200];
  };

  $scope.logItem = function (item) {
    console.log(item.name, ' was selected');
  };

  $scope.logOrder = function (order) {
    console.log('order: ', order);
  };

  $scope.logPagination = function (page, limit) {
    console.log('page: ', page);
    console.log('limit: ', limit);
  }
}