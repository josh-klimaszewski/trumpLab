(function () {
        var gameComponent = {
            template: `
           <div class="container">
               <h2>Did Trump Really Say That?!?!?</h2>
               <p> {{ $ctrl.data.value }}</p>
           <div>  
            `,
            controller: function (TrumpService) {
                var $ctrl = this;
                $ctrl.data = TrumpService.getTrumpQuote();
                console.log($ctrl.data);

            })
    }



    angular
    .module("app")
    .component("gameComponent", gameComponent);
})();