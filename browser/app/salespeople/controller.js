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
	};

	$scope.regionsSelected = function(){
		var regions = [];
		if ($scope.north){
      regions.push('north');
    };
		if ($scope.south){
      regions.push('south');
    };
		if ($scope.east){
      regions.push('east');
    };
		if ($scope.west){
      regions.push('west');
    };
		return regions;
	};

	var getSalespeople = function(){
		SPFactory.getAll()
		.then(function(salespeople){
			$scope.salespeople = salespeople;
		});
	};

	getSalespeople();

	$scope.delete = function(salesperson){
		SPFactory.deleteById(salesperson._id);
		getSalespeople();
	};

	$scope.regionToggle = function(region, salesperson){
		if (salesperson){
			SPFactory.toggleRegion(salesperson, region)
        .then(function(){
          getSalespeople();
        });
		}
		else {
			$scope[region] = !$scope[region];
		}
	};
});
