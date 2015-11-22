(function () {
    'use strict';

    angular
        .module('app')
        .controller('RunnersController', RunnersController);

    RunnersController.$inject = ['$http'];
    function RunnersController($http) {
        var vm = this;
        vm.runners = [];

        activate();

        function activate() {
            console.log('activated');

            $http.get('/api/runner')
                .success(function (data) {
                    vm.runners = data;
                })
                .error(function (http, status, func, httpObj) {
                    console.log('error getting data', http, status, func, httpObj);
                });
        }
    }
})();