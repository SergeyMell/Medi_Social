(function() {
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
        state: 'auth.report',
        config: {
          url: '/report',
          templateUrl: 'app/report/report.html',
          controller: 'ReportController',
          controllerAs: 'vm',
          title: 'report',
          settings: {
          }
        }
      }
    ];
  }
})();
