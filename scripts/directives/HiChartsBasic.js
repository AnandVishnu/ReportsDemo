(function () {
  'use strict';
  angular.module('myApp.HiChartDirectives', [])
  .directive('hcPie', function () {
  return {
    restrict: 'EAC',
    replace: true,
    scope: {
      data: '='
    },
    controller: function ($scope, $element, $attrs) {
      //console.log($scope.title);
	  //$scope.convertDataForHighChart($scope.data);
    },
    template: '<div id="container" style="margin: 0 auto">not working</div>',
    link: function (scope, element, attrs) {
      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage}%</b>',
          percentageDecimals: 1
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              color: '#000000',
              connectorColor: '#000000',
              formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
              }
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Browser share',
          data: scope.data
        }]
      });
	  
	  
	  
	  
      scope.$watch("data", function (newValue) {
        chart.series[0].setData(newValue, true);
      }, true);
      
    }
  }
});
  
}());
