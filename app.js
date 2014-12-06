angular.module('scheduleApp', ['firebase'])
.controller('mainController', function($scope, $firebase){
  var ref = new Firebase("https://shining-heat-9261.firebaseio.com/days");
  var fb = $firebase(ref);
});
