'use strict';

app.controller('SPCtrl', function($scope, $http, SPFactory){
	$scope.addSP = function(){
		SPFactory.addSP($scope.name)
		.then(function(){
			$scope.name = ""
		});
	}

	SPFactory.getAll()
	.then(function(salespeople){
		$scope.salespeople = salespeople;
	});

	$scope.delete = function(){
		SPFactory.deleteById(this.salesperson._id)
	}
});