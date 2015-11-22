/*(function () {
    'use strict';

    angular
        .module('app')
        .service('RunnersService', runnersService);

    runnersService.$inject = ['$http'];
    function runnersService($http) {

        return {
            runners: [],
            getRunners: getRunners
        };

        function getRunners() { }
        console.log('getting runners');
        return $http.get('/api/runner')
            .success(function (data) {
                this.runners = data;
            });
    }
})();*/