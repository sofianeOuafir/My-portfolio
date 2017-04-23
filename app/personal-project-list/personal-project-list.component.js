angular.module('personalProjectList')
       .component('personalProjectList', {
       templateUrl: 'personal-project-list/personal-project-list.template.html',
       controller: ['$http', '$translate', '$rootScope', function personalProjectListController($http, $translate, $rootScope){
        var self = this;
        self.orderProp = '-startdate';

        $http.get('http://68.66.240.35/admin-cv/personalProject/list?lang=en').then(function(response){
          self.projects = response.data;
        });

        $rootScope.$on('$translateChangeSuccess', function () {
          if($rootScope.lang == 'en')
          {
            $http.get('http://68.66.240.35/admin-cv/personalProject/list?lang=en').then(function(response){
              self.projects = response.data;
            });
          }
          else
          {
            $http.get('http://68.66.240.35/admin-cv/personalProject/list?lang=fr').then(function(response){
              self.projects = response.data;
            });
          }

        });

       }]



       });
