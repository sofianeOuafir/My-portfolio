'use strict';

describe('educationList', function(){

  beforeEach(module('educationList'));

  describe('educationList', function(){
    var ctrl;
    var $httpBackend;

    beforeEach(inject(function($componentController, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8080/cv/education/list?lang=en')
                  .respond([{'class':'cv.Education','id':1,'description':'lala','enddate':'2017-04-01T22:00:00Z','place':'la','startdate':'2017-08-06T22:00:00Z','title':'education1','user':{'class':'cv.User','id':1}},{'class':'cv.Education','id':2,'description':'lala','enddate':'2017-04-02T12:13:48Z','place':'la','startdate':'2017-04-02T12:13:48Z','title':'education2','user':{'class':'cv.User','id':1}},{'class':'cv.Education','id':3,'description':'ddd','enddate':'2017-04-06T22:00:00Z','place':'ddd','startdate':'2017-08-05T22:00:00Z','title':'coteaux','user':{'class':'cv.User','id':1}}]);
      ctrl = $componentController('educationList');
    }));

    it('should set a default value for the orderProp property', function(){
      expect(ctrl.orderProp).toBe('-startdate');
    });

    it('should create a `educationList` property with 3 educations fetched with `$http`', function(){
      expect(ctrl.educations).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.educations.length).toBe(3);
    });


  });



});
