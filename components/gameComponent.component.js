(function() {
  var gameComponent = {
    template: `
         <h1>Did Trump Really Say That?!?!?</h1>
         <div class="container">
          <button type="submit">Generate Even Dumber Quote</button>
          <p class="howTo" >Click button for amount of words in quote</p>
          <form>
            <ul ng-repeat="data in $ctrl.newData">
              <li> {{ data.value }} </li>
            </ul>
          </form>
        </div>
            `,
    controller: function(TrumpService) {

      var $ctrl = this;
      $ctrl.newData = TrumpService.buildArray();
      console.log($ctrl.newData)




    }
  }



  angular
    .module("app")
    .component("gameComponent", gameComponent);
})();
