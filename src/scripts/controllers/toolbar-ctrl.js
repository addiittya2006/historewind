angular.module('toolbarCtrl', [])
	.controller('toolbarCtrl', ['$scope', '$rootScope', '$mdDialog', 'headColor', function($scope, $rootScope, $mdDialog, headColor) {

		// set default evening color
		$scope.$on('setDefaultEveningColor', function(event, resp) {
			$scope.setDefaultEveningColor(resp);
		});
		$scope.setDefaultEveningColor = function(color) {
			angular.element(document.querySelector('.toolbar')).css('background', color);
			angular.element(document.querySelector('.gallery')).css('background', color);
			headColor.setMetaTag({
				color : color
			});
		}

		// SHOW DIALOG MODEL
		$scope.showModel = function(items) {
			$('body').addClass('modal-open');
			// $scope.projectData = items;
			var modalInstance = $mdDialog.show({
				locals: {datatopass: items},
				controller: colorDialog,
				templateUrl: './src/templates/colorDialog.html',
				parent: angular.element(document.body),
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen
			});
			modalInstance.then(function(){
				angular.element( $document[0].body).removeClass('modal-open');
			}, function() {
				console.log('scrolling enable');
				$('body').removeClass('modal-open');
			});
			function colorDialog ($scope, datatopass) {
				$scope.changeBackground = function(color) {
					angular.element(document.querySelector('.toolbar')).css('background', color);
					angular.element(document.querySelector('.gallery')).css('background', color);
					headColor.setMetaTag({
						color : color
					});
				}
			}
		}

		// CLOSE MODEL
		// $scope.cancel =function() {
		// 	$mdDialog.cancel();
		// 	$('body').removeClass('modal-open');
		// }
	}])
