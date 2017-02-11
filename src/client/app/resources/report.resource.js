angular
  .module('app.core')
  .factory('ReportResource', ReportResource);

ReportResource.$inject = ['$resource', 'config'];

function ReportResource($resource, config) {

  var userRoute = config.apiUrl + '/reports';

  return $resource(userRoute, {}, {
    all: {
      method: 'GET',
      url: userRoute + '/all'
    }

  });

}

