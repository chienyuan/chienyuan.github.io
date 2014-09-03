'use strict';

angular.module('chienApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.slides = [
      {'image':"images/c1.jpg",'text': 'Allen,TX firework'},
      {'image':"images/c2.jpg",'text': 'Allen,TX firework'},
    ];
  });
