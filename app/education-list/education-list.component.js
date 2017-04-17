'use strict';

angular.
  module('educationList').
    component('educationList', {
    templateUrl: 'education-list/education-list.template.html',
    controller: ['$http', '$translate', '$rootScope', function EducationListController($http, $translate, $rootScope){
      var self = this;
      self.orderProp = '-startdate';

      $http.get('http://localhost:8080/admin-cv/education/list?lang=en').then(function(response){
        self.educations = response.data;
      });

      $rootScope.$on('$translateChangeSuccess', function () {
        if($rootScope.lang === 'en')
        {
          $http.get('http://localhost:8080/admin-cv/education/list?lang=en').then(function(response){
            self.educations = response.data;
          });
        }
        else
        {
          $http.get('http://localhost:8080/admin-cv/education/list?lang=fr').then(function(response){
            self.educations = response.data;
          });
        }

      });



    }
    ]


    });
