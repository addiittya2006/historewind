angular.module('dataService', [])

	.factory('dataService', ['$http', function($http) {
		return {
			getData: function(todayDate) {
				return $http.get('https://history.fundsofhope.org/' + todayDate + '/mag.json');
				// return todayDate;
			}
		}
	}])