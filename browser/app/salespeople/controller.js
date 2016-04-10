'use strict';

app.controller('SPCtrl', function($scope, $http, SPFactory){
	$scope.addSP = function(){
		$http.post('/api/salespeople/add/'+$scope.name)
		.then(function(){
			$scope.name = ""
		});
	}

	SPFactory.getAll()
	.then(function(salespeople){
		$scope.salespeople = salespeople;
	});
});