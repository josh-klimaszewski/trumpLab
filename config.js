(function() {
    angular.module("app")
    .config(function($routeProvider) {
        $routeProvider
        .when("/home", {
            template: "<main-component></main-component>"
        })
        .when("/game", {
            template: "<game-component></game-component>"
        })
        
        .otherwise({ redirectTo: "/home" });
    });
})();