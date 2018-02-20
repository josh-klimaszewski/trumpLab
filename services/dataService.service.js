(function(){

    function dataService(){
        return {
            getTrumpQuote: getTrumpQuote
        }

        
    }







    angular
    .module("app")
    .factory("dataService", dataService);
})();