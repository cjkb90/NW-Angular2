'use strict';

app.controller('SPCtrl', function($scope, $http, SPFactory, $log){
	$scope.addSP = function(){
		var regions = $scope.regionsSelected();
		SPFactory.addSP($scope.name, regions)
		.then(function(){
			$scope.name = ""
			$scope.north = $scope.south = $scope.east = $scope.west = undefined;
		});
		getSalespeople();
	}

	$scope.regionsSelected = function(){
		var regions = [];
		if ($scope.north){regions.push('north')};
		if ($scope.south){regions.push('south')};
		if ($scope.east){regions.push('east')};
		if ($scope.west){regions.push('west')};
		return regions;
	}

	var getSalespeople = function(){
		SPFactory.getAll()
		.then(function(salespeople){
			$scope.salespeople = salespeople;
		});
	}
	getSalespeople();

	$scope.delete = function(){
		SPFactory.deleteById(this.salesperson._id)
		getSalespeople();
	}
	$scope.regionToggle = function(region){
		if (this.salesperson){
			SPFactory.toggleRegion(this.salesperson, region);
		}
		else {
			if (region == 'north') {$scope.north = !$scope.north}
			if (region == 'south') {$scope.south = !$scope.south}
			if (region == 'east') {$scope.east = !$scope.east}
			if (region == 'west') {$scope.west = !$scope.west}
		}
		getSalespeople();
		$log.log(this);
	}


});