var app = angular.module("app")
.factory('countryService', ['$http', countryService]);

function countryService($http) {

	var urlBase = '/api/countries';

	var getCountries = function() {
		return $http.get(urlBase).then(function(response) {
			return response.data;
		});
	};

	return {
		getCountries: getCountries
	};
};