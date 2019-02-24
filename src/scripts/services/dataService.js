angular.module('dataService', [])

	.factory('morningService', ['$http', function($http) {
		return {
			getDownloadUrl: function(todayDate) {
				return firebase.storage().ref(todayDate + "/morn_digest.json").getDownloadURL();
			},
			getData: function(url) {
				return $http.get(url);
			}
		}
	}])

	.factory('eveningService', ['$http', function($http) {
		return {
			getDownloadUrl: function(todayDate) {
				return firebase.storage().ref(todayDate + "/eve_digest.json").getDownloadURL();
			},
			getData: function(url) {
				return $http.get(url);
			}
		}
	}])

	.service('headColor', function($window) {
		this.setMetaTag = function(tagData) {
			$window.document.getElementsByName('theme-color')[0].content = tagData.color;
			$window.document.getElementsByName('apple-mobile-web-app-status-bar-style')[0].content = tagData.color;			
		}
	})
