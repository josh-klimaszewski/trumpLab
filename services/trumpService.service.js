(function(){

  function TrumpService($http){
      
      var trumpWordArray = [];
      return {
          
          addQuote: addQuote,
          getTrumpQuote: getTrumpQuote,
          getTrumpWordArray: getTrumpWordArray
          
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
      function addQuote(quote) {
          var spacePosition = quote.indexOf(" ");
          var cutQuote = quote.substr(0, spacePosition);
          trumpWordArray.push(cutQuote);
          

      }
      
      function getTrumpWordArray(){
          return trumpWordArray;
      }


  }





    angular
    .module("app")
    .factory("TrumpService", TrumpService);
})();
