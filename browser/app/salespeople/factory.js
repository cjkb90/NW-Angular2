'use strict';

app.factory('SPFactory', function($http, $log){
	var SPFactory = {};

	SPFactory.getAll = function(){
		return $http.get('/api/salespeople')
		.then(function(response){
			return(response.data);
		})
	}

	SPFactory.addSP = function(name, regions){
		return $http.post('/api/salespeople/add/'+name, regions);
	}

	SPFactory.deleteById = function(id){
		$http.delete('/api/salespeople/delete/'+id)
	}

	SPFactory.toggleRegion = function(salesperson, region){
		$http.get('/api/salespeople/find/'+salesperson._id)
		.then(function(response){
			return(response.data);
		})
		.then(function(data){
			$log.log(data.regions)
			var index = data.regions.indexOf(region);
			//This function is not working as intended. These changes aren't being stored for some reason
			//if the region clicked is not part of the person's regions, then push it to the regions array
			if(index<0){
				data.regions.push(region);
				$log.log(data.regions)
			}
			//if it is, then remove it from the array
			else{
				data.regions.splice(index, 1);
			}
			console.log(data)
			$http.put('/api/salespeople/find/'+salesperson._id, data);
		});
	}

	return SPFactory;
});