'use strict';

describe('workExperienceList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('workExperienceList'));

  // Test the controller
  describe('workExperienceList', function() {
    var ctrl;
    var $httpBackend;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8080/cv/workExperience/list?lang=en')
                  .respond([{"class":"cv.WorkExperience","id":1,"description":"lala","enddate":"2017-04-02T12:13:47Z","place":"la","startdate":"2017-04-02T12:13:47Z","title":"workExperience1","user":{"class":"cv.User","id":1}},{"class":"cv.WorkExperience","id":2,"description":"lala","enddate":"2017-04-02T12:13:47Z","place":"la","startdate":"2017-04-02T12:13:47Z","title":"workExperience2","user":{"class":"cv.User","id":1}}]);
      ctrl = $componentController('workExperienceList');
    }));

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('-startdate');
    });

    it('should create a `workExperiences` property with 2 work experiences fetched with `$http`', function() {
      expect(ctrl.workExperiences).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.workExperiences).toEqual([{"class":"cv.WorkExperience","id":1,"description":"lala","enddate":"2017-04-02T12:13:47Z","place":"la","startdate":"2017-04-02T12:13:47Z","title":"workExperience1","user":{"class":"cv.User","id":1}},{"class":"cv.WorkExperience","id":2,"description":"lala","enddate":"2017-04-02T12:13:47Z","place":"la","startdate":"2017-04-02T12:13:47Z","title":"workExperience2","user":{"class":"cv.User","id":1}}]);
    });

  });

});



