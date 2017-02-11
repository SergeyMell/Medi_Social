(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {

    return [
      {
        state: 'login',
        config: {
          url: '/login',
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm',
          title: 'Login',
          settings: {}
        }
      },
      {
        state: 'auth',
        config: {
          abstract: true,
          template: '<ui-view/>',
          resolve: {
            checkAuth: ['SessionResource', function (SessionResource) {
              console.log('authhh');
              return SessionResource.get().$promise;
            }]
          }
        }
      },
    ];
  }
})();
