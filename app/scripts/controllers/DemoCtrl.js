(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl', ['$scope', function($scope){
      $scope.title = 'DemoCtrl';
      $scope.d3Data = [
        {name: 'Roberto', score:91, color: 'green'},
        {name: 'Maria', score:96},
        {name: 'Francesca', score: 48},
        {name: 'Andrea', score:75},
        {name: 'Vincenzo', score:86},
        {name: 'Silvana', score: 100},
        {name: 'Giovanni', score:98},
        {name: 'Domenico', score:63},
        {name: 'Sandra', score: 28}
      ];
    }]);

}());
