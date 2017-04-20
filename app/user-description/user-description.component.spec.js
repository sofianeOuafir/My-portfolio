'use strict';

describe('userDescription', function(){

  beforeEach(module('userDescription'));

  describe('controller', function(){
    var ctrl;
    var $httpBackend;

    beforeEach(inject(function($componentController, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8080/admin-cv/user/list?lang=en')
                  .respond({"class":"cv.User","id":1,"description":"Coming soon","educations":[{"class":"cv.Education","id":1},{"class":"cv.Education","id":25},{"class":"cv.Education","id":2}],"email":"sofiane.ouafir@live.fr","firstname":"Sofiane","github":"https://github.com/sofianeOuafir","interests":[{"class":"cv.Interest","id":2},{"class":"cv.Interest","id":1}],"jobDescription":"Coming soon","phoneNumber":"+33646670094","professionalSkills":[{"class":"cv.ProfessionalSkill","id":2},{"class":"cv.ProfessionalSkill","id":1}],"surname":"OUAFIR","workExperiences":[{"class":"cv.WorkExperience","id":2},{"class":"cv.WorkExperience","id":1},{"class":"cv.WorkExperience","id":26}]});
      ctrl = $componentController('userDescription');
    }));

    it('should create a user property named Sofiane', function(){
      expect(ctrl.user).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.user.firstname).toBe('Sofiane');
    });
  });




});
