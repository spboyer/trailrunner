(function() {
'use strict';

    angular
        .module('app')
        .service('RunnersService', runnersService);

    runnersService.$inject = ['$http'];
    function runnersService($http) {
        this.getRunners = getRunners;

        ////////////////

        function getRunners() { }
            return $http.get('/api/runner');
        }
})();