angular.module('toolbarCtrl', [])
	.controller('toolbarCtrl', ['$scope', '$rootScope', '$mdDialog', '$window', 'headColor', function($scope, $rootScope, $mdDialog, $window, headColor) {

		var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
		var todayDate = months[$scope.date.getMonth()] + ' ' + $scope.date.getDate();
		$scope.date = todayDate;
		// console.log($scope.date);

		var setToolbarColor = angular.element(document.querySelector('.toolbar')),
				setGalleryColor = angular.element(document.querySelector('.gallery'));

		// set default evening color
		$scope.$on('setDefaultEveningColor', function(event, resp) {
			$scope.setEveningColor(resp.color);
		});
		$scope.setEveningColor = function(color) {
			setToolbarColor.css('background', color);
			setGalleryColor.css('background', color);
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
				$('body').removeClass('modal-open');
			});
			function colorDialog ($scope, datatopass) {
				$scope.changeBackground = function(color) {
					setToolbarColor.css('background', color);
					setGalleryColor.css('background', color);
					headColor.setMetaTag({
						color : color
					});
				}
			}
		}
	}])
