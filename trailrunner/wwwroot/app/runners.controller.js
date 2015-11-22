(function() {
'use strict';

    angular
        .module('app')
        .controller('RunnersController', RunnersController);

    RunnersController.$inject = ['RunnersController'];
    function RunnersController(RunnersService) {
        var vm = this;

        activate();

        function activate() { }
    }
})();