angular.module('toolbarCtrl', [])
	.controller('toolbarCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
		// SHOW DIALOG MODEL
		$scope.showModel = function(items) {
			// $scope.projectData = items;
			$mdDialog.show({
				locals: {datatopass: items},
				controller: colorDialog,
				templateUrl: './src/templates/colorDialog.html',
				parent: angular.element(document.body),
				clickOutsideToClose:true,
    			fullscreen: $scope.customFullscreen
			});
			function colorDialog ($scope, datatopass) { 
			    $scope.projectData = datatopass;  
				console.log($scope.projectData);
			}
		}

		// CLOSE MODEL
		$scope.cancel =function() {
			$mdDialog.cancel();
		}
	}])
