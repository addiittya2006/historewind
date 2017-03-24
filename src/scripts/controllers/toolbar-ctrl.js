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
				$scope.changeBackground = function(color) {
					// angular.element($0).css('background-color', color);
					// console.log($scope.html);
					// var appElement = document.querySelector('[ng-app=app]');
					// var appScope = angular.element(appElement).scope();
					// var controllerScope = appScope.$$childHead;
					// console.log(controllerScope);
					// angular.element(document.querySelector('html')).css('background', color);
					// angular.element(document.querySelector('html'))[0].style.backgroundColor = "red";
					// console.log(angular.element(document.querySelector('[ng-app=app]')).scope());
					angular.element(document.querySelector('.toolbar')).css('background', color);
					angular.element(document.querySelector('.gallery')).css('background', color);

				}
			}
		}

		// CLOSE MODEL
		$scope.cancel =function() {
			$mdDialog.cancel();
			$('.colorDialog').removeClass('modal-open');
		}
	}])
