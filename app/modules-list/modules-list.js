angular.module('myApp.modules-list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/modules-list', {
    templateUrl: 'modules-list/modules-list.html',
    controller: 'modulesListController'
  });
}])
.directive('bestModule', ['modulesService', function(modulesService){
	return {
		controller: function($scope, $element, $attrs, $transclude) {
			modulesService.getBestScoredModule().then(function(moduleIDToDisplay) {
				modulesService.getInfos(moduleIDToDisplay).then(function(result) {
					if (result.status == 200) {
						$scope.dataError = false;
						$scope.moduleData = result.data;
					} else {
						$scope.dataError = true;
					}
				});
			});
		},
		restrict: 'E',
		templateUrl: 'module-details/module-details.html'
	};
}])
.controller('modulesListController', ['modulesService', '$scope', function(modulesService, $scope) {
	modulesService.getList().then(function(data) {
		$scope.modulesData = data;
	});
}]);
