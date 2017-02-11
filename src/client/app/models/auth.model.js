angular
  .module('app.core')
  .factory('AuthModel', AuthModel);

AuthModel.$inject = [];

function AuthModel() {

  var authModel = {
    token: 'hello'
  };

  return authModel;

}
