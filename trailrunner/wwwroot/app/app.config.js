(function () {
    'use strict';

    angular
      .module('app')
      .config(initRouter);

    function initRouter($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
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