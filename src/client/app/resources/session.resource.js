angular
  .module('app.core')
  .factory('SessionResource', SessionResource);

SessionResource.$inject = ['$resource', 'config'];

function SessionResource($resource, config) {

  var userRoute = config.apiUrl + '/sessions';

  return $resource(userRoute, {});

}

