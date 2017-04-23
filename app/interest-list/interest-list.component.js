'use strict';

angular.
  module('interestList').
    component('interestList', {
      templateUrl: 'interest-list/interest-list.template.html',
      controller: ['$http', '$translate', '$rootScope', function InterestListController($http, $translate, $rootScope){
        var self = this;

        $http.get('http://68.66.240.35/admin-cv/interest/list?lang=en').then(function(response){
          self.interests = response.data;
        });

        $rootScope.$on('$translateChangeSuccess', function () {
          if($rootScope.lang == 'en')
          {
            $http.get('http://68.66.240.35/admin-cv/interest/list?lang=en').then(function(response){
              self.interests = response.data;
            });
          }
          else
          {
            $http.get('http://68.66.240.35/admin-cv/interest/list?lang=fr').then(function(response){
              self.interests = response.data;
            });
          }

        });

      }]
    });
