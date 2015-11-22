(function () {
    'use strict';

    angular
        .module('app')
        .config(initRouter)
        .config(initRoutes);

    function initRouter($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }

    function initRoutes($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('admin', {
                url: '/runners',
                templateUrl: 'app/runners.html',
                controller: 'RunnersController',
                controllerAs: 'vm'
            });
    }
})();