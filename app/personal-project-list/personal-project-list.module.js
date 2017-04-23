'use strict';

angular.module('personalProjectList', ['pascalprecht.translate'])
       .config(function($translateProvider){

        var en = {
          PROJECT:{
            TITLE: 'Personal projects',
            NEWEST: 'Newest',
            OLDEST: 'Oldest',
            MORE_INFORMATIONS: 'more informations'
          }
        };

        var fr = {
          PROJECT:{
            TITLE: 'Projets personnels',
            NEWEST: 'Plus récent',
            OLDEST: 'Plus ancien',
            MORE_INFORMATIONS: 'en savoir plus'
          }
        };

       $translateProvider.translations('en', en)
        .translations('fr', fr);
       });
