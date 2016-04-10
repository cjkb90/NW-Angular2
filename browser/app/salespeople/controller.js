'use strict';

app.controller('SPCtrl', function($scope, $http, SPFactory, $log){
	$scope.addSP = function(){
		SPFactory.addSP($scope.name)
		.then(function(){
			$scope.name = ""
		});
		getSalespeople();
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
			$http.get('/api/salespeople/find/'+this.salesperson._id)
			.then(function(response){
				return(response.data);
			})
			.then(function(data){
				$log.log(data.region)
				var index = data.region.indexOf(region);
				if(index<0){
					data.region.push(region);
					$log.log(data.region)
				}
				else{
					data.region.splice(index, 1);
				}
			});
		}
		else {
			if (region == 'north') {$scope.north = !$scope.north}
			if (region == 'south') {$scope.south = !$scope.south}
			if (region == 'east') {$scope.east = !$scope.east}
			if (region == 'west') {$scope.west = !$scope.west}
		}
		$log.log(this);
	}


});