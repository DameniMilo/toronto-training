angular.module('myApp.create-module', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create-module', {
    templateUrl: 'create-module/create-module.html',
    controller: 'createModuleController'
  });
}])
.controller('createModuleController', ['modulesService', '$scope', '$routeParams', function(modulesService, $scope, $routeParams) {
	// modulesService.getInfos($routeParams.moduleID).then(function(result) {
	// 	if (result.status == 200) {
	// 		$scope.dataError = false;
	// 		$scope.moduleData = result.data;
	// 	} else {
	// 		$scope.dataError = true;
	// 	}
	// });
	$scope.score = Math.floor((Math.random()*100)+1);

	// $scope.
}]);