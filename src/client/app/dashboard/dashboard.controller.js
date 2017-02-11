(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger', 'UserResource'];

  function DashboardController($q, dataservice, logger, UserResource) {
    var vm = this;

    vm.model = {
      user: UserResource.get()
    };

    vm.menu = {
      updateUser: updateUser
    };

    function updateUser() {
      UserResource.update(vm.model.user);
    }
  }
})();
