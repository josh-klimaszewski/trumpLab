(function(){

    function DataService($http){
        return {
            getTrumpQuote: getTrumpQuote
        };
        function getTrumpQuote() {
            
             return $http({
                method: "GET",
                url: "https://matchilling-tronald-dump-v1.p.mashape.com/random/quote",
                headers: {
                  "X-Mashape-Key": "VSbOH6DUmQmshdrVPOIFqatuDHMTp1uElRHjsnXjDMnDo0VhD4",
                  "Accept": "application/hal+json"
                }
              }).then(function(response) {
                  return response.data;
              })
        }

        
    }







    angular
    .module("app")
    .factory("DataService", DataService);
})();