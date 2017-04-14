'use strict';

describe('interestList', function(){
  beforeEach(module('interestList'));

  describe('interestListController', function(){
    var ctrl;
    var $httpBackend;

    beforeEach(inject(function($componentController, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8080/cv/interest/list?lang=en')
                  .respond([{'class':'cv.Interest','id':1,'icon':'qssds','title':'lalalalal','user':{'class':'cv.User','id':1}}]);
      ctrl = $componentController('interestList');

    }));

    it('should create a interests property with 1 interest', function(){
      expect(ctrl.interests).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.interests.length).toBe(1);

    });

  });


});
