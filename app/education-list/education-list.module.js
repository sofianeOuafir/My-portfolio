'use strict';

angular.module('educationList', ['pascalprecht.translate'])
       .config(function($translateProvider){

        var en = {
          EDUCATION:{
            TITLE: 'Education',
            NEWEST: 'Newest',
            OLDEST: 'Oldest'
          }
        };

        var fr = {
          EDUCATION:{
            TITLE: 'Formation',
            NEWEST: 'Plus récent',
            OLDEST: 'Plus ancien'
          }
        };

       $translateProvider.translations('en', en)
        .translations('fr', fr);
       });

