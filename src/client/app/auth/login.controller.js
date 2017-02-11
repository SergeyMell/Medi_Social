(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$state', 'logger', 'SessionResource'];

  function LoginController($state, logger, SessionResource) {
    var vm = this;

    vm.menu = {
      login: login
    };

    vm.model = {
      login: '',
      password: ''
    };

    function login() {
      SessionResource.save({
        login: vm.model.login,
        password: vm.model.password
      }).$promise.then(function() {
        $state.go('auth.dashboard');
      }, function(error) {
        console.log(error);
      });
    }

  }
})();
