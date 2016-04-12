'use strict';

app.factory('SPFactory', function($http, $log){
	var SPFactory = {};

	SPFactory.getAll = function(){
		return $http.get('/api/salespeople')
		.then(function(response){
			return(response.data);
		});
	};

	SPFactory.addSP = function(name, regions){
		return $http.post('/api/salespeople/add/'+name, regions);
	};

	SPFactory.deleteById = function(id){
		$http.delete('/api/salespeople/delete/'+id)
	};

	SPFactory.toggleRegion = function(salesperson, region){
    if(salesperson.regions.indexOf(region) === -1)
      salesperson.regions.push(region);
    else
      salesperson.regions.splice(salesperson.regions.indexOf(region), 1);

    //TODO - update the salesperson on the server
			//$http.put('/api/salespeople/find/'+salesperson._id, data);
	}

	return SPFactory;
});
