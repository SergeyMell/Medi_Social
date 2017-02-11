
angular
  .module('app.core')
  .config(config);

config.$inject = ['$httpProvider'];

function config($httpProvider) {
  $httpProvider.interceptors.push(interceptor);
}

interceptor.$inject = ['$q', '$injector', 'AuthModel'];

function interceptor($q, $injector, AuthModel) {
  return {
    request: function(config) {
      config.headers.Authorization = AuthModel.token;
      return config;
    },
    responseError: function(rejection) {

    }
  };
  
}
