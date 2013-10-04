## an AngularJS and D3.js Demo


#### Using d3 with dependency injection

`````
angular.module('d3', [])
  .factory('d3Service', [function(){
    var d3;
    // insert d3 code here
    return d3;
  }];

``````

##### With this factory we can add our custom code to our D3 element and inject our `D3` service into our code by adding it as a dependency to our `app` module


``````
angular.module('app', ['d3']);

``````

##### We'll inject our service into our directive to use it too!

``````
angular.module('myApp.directives', ['d3'])
  .directive('barChart', ['d3Service', function(d3Service) {
    return {
      restrict: 'EA',
      // directive code
    }
  }]);

``````

##### Then add the finished directive to your html like this!

`<div d3-bars bar-height="20" bar-padding="5"></div>`


###[Click Here for Live Demo](http://domenicocolandrea.com/ngd3)
