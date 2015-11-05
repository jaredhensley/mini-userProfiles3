var app = angular.module('userProfiles');

app.service('mainService', function ($http, $q) {

	this.getUsers = function () {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://reqres.in/api/users?page=1'
		}).then(function (results) {
			var parsedResults = results.data.data;
			parsedResults.forEach(function (value, index) {
				value.first_name = 'ralph';
			});
			deferred.resolve(parsedResults);
		});
		return deferred.promise;
	}

});