(function () {
  'use strict';

  // create the angular app
  angular.module('myApp', [
    'myApp.controllers',
    'myApp.directives',
	'myApp.HiChartDirectives',
	'myApp.DojoDirectives'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('myApp.controllers', []);
  angular.module('myApp.directives', ['d3']);
  angular.module('myApp.HiChartDirectives', []);
  angular.module('myApp.DojoDirectives', []);
  


}());