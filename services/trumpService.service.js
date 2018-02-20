(function(){

    function TrumpService($http){
        var trumpObj = {};
        return {
            trumpMagic: trumpMagic
            getData: getData
        };
        function trumpMagic() {
             for (var i = 1; i <= 5; i++) {
                return $http({
                    method: "GET",
                    url: "https://matchilling-tronald-dump-v1.p.mashape.com/random/quote",
                    headers: {
                      "X-Mashape-Key": "VSbOH6DUmQmshdrVPOIFqatuDHMTp1uElRHjsnXjDMnDo0VhD4",
                      "Accept": "application/hal+json"
                    }
                  }).then(function(response) {
                      return response.data;
                      trumpObj.push(response.data);
                  })
             } 
        }
        function getData() {
            return trumpObj;
        }
    }







    angular
    .module("app")
    .factory("TrumpService", TrumpService);
})();