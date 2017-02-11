(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('ReportController', ReportController);

  ReportController.$inject = ['$q', 'ReportResource', 'logger', 'UserResource'];

  function ReportController($q, ReportResource, logger, UserResource) {
    var vm = this;

    vm.model = {
      user: UserResource.get(),

      report: {},
      reportYear: (new Date()).getFullYear(),
      reportMonth: (new Date()).getMonth() + 1
    };

    vm.menu = {
      getReport: getReport
    };

    function getReport() {
      ReportResource.get({
          year: vm.model.reportYear,
          month: vm.model.reportMonth
        }
      ).$promise.then(function(response) {
        vm.model.report = response;
        console.log(response);
      });
    }

  }
})();
