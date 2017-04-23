'use strict';

describe('professionalSkillList', function(){
  beforeEach(module('professionalSkillList'));

  describe('controller', function(){
    var ctrl;
    var $httpBackend;

    beforeEach(inject(function($componentController, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://68.66.240.35/admin-cv/professionalSkill/list?lang=en')
                  .respond('[{"class":"cv.ProfessionalSkill","id":2,"achievment":70,"title":"AngularJS","user":{"class":"cv.User","id":1}},{"class":"cv.ProfessionalSkill","id":1,"achievment":60,"title":"Grails","user":{"class":"cv.User","id":1}}]');
       ctrl = $componentController('professionalSkillList');
    }));

    it('should create a professionalSkills property with 2 items', function(){
      $httpBackend.flush();
      expect(ctrl.professionalSkills.length).toBe(2);

    });

    it('color function should return the right value', function(){
      expect(ctrl.color(100)).toBe('success');
      expect(ctrl.color(60)).toBe('warning');
      expect(ctrl.color(10)).toBe('danger');
    });

    it('orderProp property should be -achievment', function(){
      expect(ctrl.orderProp).toBe('-achievment');
    });


  });


});
