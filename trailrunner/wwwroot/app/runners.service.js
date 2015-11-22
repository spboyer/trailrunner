(function() {
'use strict';

    angular
        .module('app')
        .service('RunnersService', runnersService);

    runnersService.$inject = ['$http'];
    function runnersService($http) {

        var service = {
            runners: [],
            getRunners: getRunners
        };
        return service;

        function getRunners() { }
            console.log('getting runners');
            return $http.get('/api/runner')
                .success(function(data){
                    service.runners = data;
                });
        }
})();