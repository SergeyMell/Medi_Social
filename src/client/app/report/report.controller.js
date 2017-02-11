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

      reportYear: (new Date()).getFullYear(),
      reportMonth: (new Date()).getMonth() + 1,

      report: {},
      rateReport: {},
      hospitalReport: {}
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
        vm.model.rateReport = response['rate_report'];
        vm.model.rateReport['docent_rate'] = parseFloat(vm.model.rateReport['docent_rate']) || vm.model.user['docent_rate'];
        vm.model.rateReport['assistant_rate'] = parseFloat(vm.model.rateReport['assistant_rate']) || vm.model.user['assistant_rate'];
        vm.model.rateReport['professor_rate'] = parseFloat(vm.model.rateReport['professor_rate']) || vm.model.user['professor_rate'];
        vm.model.rateReport['department_head_rate'] = parseFloat(vm.model.rateReport['department_head_rate']) || vm.model.user['department_head_rate'];

        vm.model.hospitalReport = response['hospital_report'];
        
      });
    }

  }
})();
