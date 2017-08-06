'use strict';

angular.
  module('professionalSkillList').
    component('professionalSkillList', {
      templateUrl: 'professional-skill-list/professional-skill-list.template.html',
      controller: ['$http', '$translate', '$rootScope', function ProfessionalSkillListController($http, $translate, $rootScope){
        var self = this;
        self.orderProp = '-achievment';
        self.color = function(achievment)
        {
          var color = new Array('success', 'warning', 'danger');
          achievment = parseInt(achievment);
          if(achievment < 33)
          {
            return color[2];
          }
          else if(achievment < 66)
          {
            return color[1];
          }
          else
          {
            return color[0];
          }
        }

        self.separateTitle = function(title)
        {
          var array = title.split(':');
          var firstPart = array[0];
          var secondPart = array[1];
          return '<span class="skills-title-firstPart"><strong>' + firstPart + ':</strong></span>' + secondPart;
        }



        $http.get('http://68.66.240.35/admin-cv/professionalSkill/list?lang=en').then(function(response){
          self.professionalSkills = response.data;
        });

        $rootScope.$on('$translateChangeSuccess', function () {
          if($rootScope.lang == 'en')
          {
            $http.get('http://68.66.240.35/admin-cv/professionalSkill/list?lang=en').then(function(response){
              self.professionalSkills = response.data;
            });
          }
          else
          {
            $http.get('http://68.66.240.35/admin-cv/professionalSkill/list?lang=fr').then(function(response){
              self.professionalSkills = response.data;
            });
          }

        });
      }]

    });
