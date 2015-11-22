(function() {
'use strict';

    angular
        .module('app')
        .controller('RunnersController', RunnersController);

    RunnersController.$inject = ['RunnersService'];
    function RunnersController(RunnersService) {
        var vm = this;
        vm.runners = [];

        activate();

        function activate() {
            console.log('activated');

            vm.runners = [{"first": "Shayne", "last": "Boyer", "favoriteBeer": "Guiness"}];

            console.log(vm.runners);

            RunnersService.getRunners()
                .success(function(data){
                    vm.runners = data;
                }).
                error(function(http, status, fnc, httpObj){
                    console.log('getting runners failed', http, status, fnc, httpObj);
                });
        }
    }
})();