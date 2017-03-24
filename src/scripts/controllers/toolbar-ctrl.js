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
			$('.colorDialog').addClass('modal-open');
			function colorDialog ($scope, datatopass) { 
			    // $scope.projectData = datatopass;  
				$scope.changeBackground = function(color) {
					console.log('enter' + color);
					angular.element(document.querySelector('html')).css('background', color);
					angular.element(document.querySelector('.toolbar')).css('background', color);
					angular.element(document.querySelector('.gallary')).css('background', color);

				}
			}
		}

		// CLOSE MODEL
		$scope.cancel =function() {
			$mdDialog.cancel();
			$('.colorDialog').removeClass('modal-open');
		}
	}])
