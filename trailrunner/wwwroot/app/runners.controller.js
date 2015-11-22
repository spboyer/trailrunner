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
           // vm.runners = [{"first": "Shayne", "last": "Boyer", "favoriteBeer": "Guiness"}];
           // console.log(vm.runners);

            vm.runners = function(){
               RunnersService.getRunners()
                .success(function(data){
                    vm.runners = data;
                })
                .error(function(http, status, func, httpObj){
                    console.log('error getting data', http, status, func, httpObj);
                });
            };
        }
    }
})();