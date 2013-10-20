(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl', ['$scope', function($scope){
      $scope.d3Data = [
        {name: 'Domenico', score:100},
        {name: 'Roberto', score:80, color: 'green'},
        {name: 'Maria', score:96},
        {name: 'Francesca', score: 48},
        {name: 'Andrea', score:75},
        {name: 'Vincenzo', score:86},
        {name: 'Silvana', score: 10},
        {name: 'Giovanni', score:56},
        {name: 'Sandra', score: 28}
      ];
    }]);

}());
