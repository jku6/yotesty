'use strict';

angular.module('testyApp')
  .controller('MainCtrl', function ($scope, $http) {
    var url = "http://api.glassdoor.com/api/api.htm?t.p=25924&t.k=fib3ZtVEqg3&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&jt=";
    window.jobData = [];
    $http.get(url+"analyst").
    success(function(data, status, headers, config) {
      var ret = data["response"]["states"];
      var dataobj = [];
      for (var aa in ret) {
        var obj = ret[aa];
        dataobj.push([obj["name"],obj["numJobs"]]);
      }
      
      newData = {};
      for (var i = 0; i < dataobj.length; i++) {
        newData[dataobj[i][0]] = {"avg":dataobj[i][1],"high":dataobj[i][1],"low":dataobj[i][1]}
      }
      $scope.jobData = newData;
      // window.jobData = dataobj;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  });
