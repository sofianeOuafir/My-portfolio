'use strict';

angular.module('workExperienceList', ['pascalprecht.translate'])
       .config(function($translateProvider){

        var en = {
          WORK:{
            TITLE: 'Work experience',
            NEWEST: 'Newest',
            OLDEST: 'Oldest'
          }
        };

        var fr = {
          WORK:{
            TITLE: 'Experience professionnelle',
            NEWEST: 'Plus récent',
            OLDEST: 'Plus ancien'
          }
        };

       $translateProvider.translations('en', en)
        .translations('fr', fr);


       });

