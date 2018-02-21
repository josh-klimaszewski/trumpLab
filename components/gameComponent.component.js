(function() {
  var gameComponent = {
    template: `
         <h1>Did Trump Really Say That?!?!?</h1>
        <div class="container" id="newQuote">
          
            <span ng-repeat="array in $ctrl.newArray track by $index">
               {{ array }} 
            </span>
          
        </div>
            `,
    controller: function(TrumpService) {

      var $ctrl = this;
      for (i = 1; i <= 10; i++) {
      TrumpService.getTrumpQuote()
        .then(function(data) {
          $ctrl.data = data.value;
          TrumpService.addQuote($ctrl.data);
          
        });
      }
       

         $ctrl.newArray = TrumpService.getTrumpWordArray();
        
      
        
        


    }
  }



  angular
    .module("app")
    .component("gameComponent", gameComponent);
})();
