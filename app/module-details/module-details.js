angular.module('myApp.module-details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/module-details', {
    templateUrl: 'module-details/module-details.html',
    controller: 'moduleDetailsController'
  }).when('/module-details/:moduleID', {
    templateUrl: 'module-details/module-details.html',
    controller: 'moduleDetailsController'
  });
}])
.controller('moduleDetailsController', ['modulesService', '$scope', '$routeParams', function(modulesService, $scope, $routeParams) {
	modulesService.getInfos($routeParams.moduleID).then(function(result) {
		if (result.status == 200) {
			$scope.dataError = false;
			$scope.moduleData = result.data;
		} else {
			$scope.dataError = true;
		}
	});
}]);