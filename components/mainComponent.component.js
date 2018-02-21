(function() {
  var mainComponent = {
    template: `
         <div>
          <h1>Did Trump Really Say That?!?!?</h1>
          <div class="main">
            <img src="photo/dogInWig.jpg" alt="Trump Dog">
            <p class="quote">"{{ $ctrl.data }}"</p>
          </div>
       </div>
     `,
    controller: function(DataService) {
      var $ctrl = this;
      DataService.getTrumpQuote()
        .then(function(data) {
          $ctrl.data = data.value;

        })
    }

  }

  angular
    .module("app")
    .component("mainComponent", mainComponent);
})();
