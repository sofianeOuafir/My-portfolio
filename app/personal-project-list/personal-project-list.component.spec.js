'use strict';

describe('personalProjectList', function(){
  beforeEach(module('personalProjectList'));

  describe('Controller', function(){
  var ctrl;
  var $httpBackend;

  beforeEach(inject(function($componentController, _$httpBackend_){
    ctrl = $componentController('personalProjectList');
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://68.66.240.35/admin-cv/personalProject/list?lang=en')
                .respond([{"class":"cv.PersonalProject","id":1,"description":"I have done this project to be able to show my cv online","startdate":"2017-04-08T22:00:00Z","technology":"AngularJs","title":"cv","user":{"class":"cv.User","id":1},"website":"https://sofianeouafir.github.io/cv/"}]);

    }));

    it('should create a projects property with 1 project', function(){
      $httpBackend.flush();
      expect(ctrl.projects.length).toBe(1);
    });
  });


});
