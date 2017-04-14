'use strict';

angular.
  module('userDescription').
    component('userDescription', {
      templateUrl: 'user-description/user-description.template.html',
      controller: ['$http', '$translate', '$rootScope', function userDescriptionController($http, $translate, $rootScope)
      {
        var self = this;
        $http.get('http://localhost:8080/cv/user/list?lang=en').then(function(response){
          self.user = response.data;
        });

        $rootScope.$on('$translateChangeSuccess', function () {
          if($rootScope.lang == 'en')
          {
            $http.get('http://localhost:8080/cv/user/list?lang=en').then(function(response){
              self.user = response.data;
            });
          }
          else
          {
            $http.get('http://localhost:8080/cv/user/list?lang=fr').then(function(response){
              self.user = response.data;
            });
          }

        });
      }]
    });
