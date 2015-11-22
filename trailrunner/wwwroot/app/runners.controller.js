(function() {
'use strict';

    angular
        .module('app')
        .controller('RunnersController', RunnersController);

    RunnersController.$inject = ['RunnersService'];
    function RunnersController(RunnersService) {
        var vm = this;

        activate();

        function activate() { }
    }
})();