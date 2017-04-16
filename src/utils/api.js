let axios = require('axios');

module.exports = {
	fetchPopularRepos: function (language){
		var encodedURI = window.encodeURI ('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
	
		return axios.get(encodedURI)
			.then ( function (response ){
				console.log(response.data.items);
				return response.data.items;

			});

	},

	fetchTodaysGames : function (todayDay){
		var URL = 'http://integrations.xchangefusion.com/api/nba/'+ todayDay;
		
		return axios.get(URL)
			.then ( function (response){
				console.log(response.data);
				return response.data;

			})
			 .catch(function (error) {
    			console.log(error);
			  });

		}
	}

