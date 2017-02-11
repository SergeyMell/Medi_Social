angular
  .module('app.core')
  .factory('UserResource', UserResource);

UserResource.$inject = ['$resource', 'config'];

function UserResource($resource, config) {

  var userRoute = config.apiUrl + '/user';

  return $resource(userRoute, {});

}

