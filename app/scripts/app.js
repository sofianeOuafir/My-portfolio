'use strict';

/**
 * @ngdoc overview
 * @name cvAngularApp
 * @description
 * # cvAngularApp
 *
 * Main module of the application.
 */
angular
  .module('cvAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'workExperienceList',
    'educationList',
    'professionalSkillList',
    'userDescription',
    'interestList',
    'pascalprecht.translate'
  ])
  .config(function ($locationProvider, $routeProvider, $translateProvider) {
    $locationProvider.hashPrefix('!');

      var en = {
        BUTTON_TEXT_FR: 'French',
        BUTTON_TEXT_EN: 'English'
      };

      var fr = {
        BUTTON_TEXT_FR: 'Français',
        BUTTON_TEXT_EN: 'Anglais'
      };

       $translateProvider.translations('en', en)
        .translations('fr', fr);

    $translateProvider.preferredLanguage('en');


  })
  .controller('TranslateController', function($translate, $scope, $rootScope) {
     $scope.changeLanguage = function (langKey) {
       $rootScope.lang = langKey;
       $translate.use(langKey);
     };
   });
