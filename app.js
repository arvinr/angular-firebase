angular.module('scheduleApp', ['firebase'])
.controller('mainController', function($scope, $firebase){
  var ref = new Firebase("https://shining-heat-9261.firebaseio.com/days");
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'days');


  $scope.reset = function(){
    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          1700: {
            time: '5:00pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          }
        }
      },
      teusday: {
        name: 'Teusday',
        slots: {
          1700: {
            time: '5:00pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          }
        }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          1700: {
            time: '5:00pm',
            booked: false
          },
          1500: {
            time: '3:00pm',
            booked: false
          },
          1300: {
            time: '1:00pm',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          }
        }
      },
    });
  }
});
