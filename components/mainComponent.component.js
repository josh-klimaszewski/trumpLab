(function() {
 var mainComponent= {
    template: `
        <div class="container">
            <h2>Did Trump Really Say That?!?!?</h2>
            <p> {{ $ctrl.data.value }}</p>
        <div>
        
    `,
    controller: function(DataService) {
        var $ctrl = this;
        DataService.getTrumpQuote()
                   .then(function(data) {
                       $ctrl.data = data;
                       console.log(data)
                   })
    }

 }
    
 angular
 .module("app")
 .component("mainComponent", mainComponent);
})();