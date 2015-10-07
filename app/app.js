'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.modules-list',
  'myApp.module-details',
  'myApp.create-module'
])
.service('modulesService', ['$http', function($http){
	var modulesData = {
		getList: function() {
			var promise = $http.get('/app/db/modules.json')
						.then(function(result) {
							return result.data;	
						})
						.catch(function(error) {
							return error.data;
						});
			return promise;
		},
		getInfos: function(moduleID) {
			var infos = $http.get('/app/db/modules/' + moduleID + '.json')
				.then(function(result) {
					return result;	
				})
				.catch(function(error) {
					return error;
				});
			return infos;
		},
		getBestScoredModule: function() {
			var bestModule = $http.get('/app/db/modules.json')
				.then(function(result) {
					var modules = result.data;
					var moduleToReturn = {score: 0};
					for (var i in modules) {
						if (modules[i].score > moduleToReturn.score) {
							moduleToReturn = modules[i];
						}
					}
					return moduleToReturn.id;
				})
			return bestModule;
		}
	};

	return modulesData;
}])
.directive('moduleTabs', function(){
	return {
		scope: {
			tabs: '='
		},
		restrict: 'E',
		templateUrl: '/app/module-details/module-tabs.html'
	};
})
.directive('showTab', function () {
    return {
        link: function (scope, element, attrs) {
            console.log(element);
            element.click(function(e) {
                e.preventDefault();
                $(element).tab('show');
            });
        }
    };
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/modules-list'});
}]);
