'use strict';

app.factory('SPFactory', function($http){
	var SPFactory = {};

	SPFactory.getAll = function(){
		return $http.get('/api/salespeople')
		.then(function(response){
			return(response.data);
		})
	}

	return SPFactory;
});