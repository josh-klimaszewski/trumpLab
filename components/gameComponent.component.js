(function() {
  var gameComponent = {
    template: `
         <h1>Did Trump Really Say That?!?!?</h1>
         <button ng-click="$ctrl.getNewArray()">Click Me To Create Your Own Trump Tweet</button>
        <div class="container" id="dumb">
            <span  ng-repeat="array in $ctrl.newArray track by $index">
               {{ array }}
            </span>
        </div>
            `,
    controller: function(TrumpService) {

      var $ctrl = this;
      for (i = 1; i <= 15; i++) {
      TrumpService.getTrumpQuote()
        .then(function(data) {
          $ctrl.data = data.value;
          TrumpService.addQuote($ctrl.data);
          
        });
      }
      $ctrl.getNewArray = function() {
        $ctrl.newArray = TrumpService.getTrumpWordArray();
        
      }
       

      
        
      
        
        


    }
  }



  angular
    .module("app")
    .component("gameComponent", gameComponent);
})();
