'use strict';

angular.module('interestList',['pascalprecht.translate'])
       .config(function($translateProvider){

        var en = {
          INTEREST:{
            TITLE: 'Interests'
          }
        };

        var fr = {
          INTEREST:{
            TITLE: 'Centres d\'intérêt'
          }
        };

       $translateProvider.translations('en', en)
        .translations('fr', fr);

       });
