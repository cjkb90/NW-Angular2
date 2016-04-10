'use strict';

app.factory('SPFactory', function($http){
	var SPFactory = {};

	SPFactory.getAll = function(){
		return $http.get('/api/salespeople')
		.then(function(response){
			return(response.data);
		})
	}

	SPFactory.addSP = function(name){
		return $http.post('/api/salespeople/add/'+name)
	}

	SPFactory.deleteById = function(id){
		$http.delete('/api/salespeople/delete/'+id)
	}

	return SPFactory;
});