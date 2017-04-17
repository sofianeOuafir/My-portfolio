'use strict';

angular.
  module('workExperienceList').
    component('workExperienceList', {
      templateUrl: 'work-experience-list/work-experience-list.template.html',
      controller: ['$http', '$translate', '$rootScope', function WorkExperienceListController($http, $translate, $rootScope)
      {
        var self = this;
        self.orderProp = '-startdate';

        $http.get('http://localhost:8080/admin-cv/workExperience/list?lang=en').then(function(response)
        {
          self.workExperiences = response.data;
        });

        $rootScope.$on('$translateChangeSuccess', function () {
          if($rootScope.lang == 'en')
          {
            $http.get('http://localhost:8080/admin-cv/workExperience/list?lang=en').then(function(response){
              self.workExperiences = response.data;
            });
          }
          else
          {
            $http.get('http://localhost:8080/admin-cv/workExperience/list?lang=fr').then(function(response){
              self.workExperiences = response.data;
            });
          }

        });
      }
      ]
    });
