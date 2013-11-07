(function () {
  'use strict';
  angular.module('myApp.DojoDirectives', [])
  .directive('dojoPie', function () {
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
    template: '<div id="chartNode" style="height: 500px"></div>',
    link: function (scope, element, attrs) {
        
	require([
     // Require the basic chart class
    "dojox/charting/Chart",
 
    // Require the theme of our choosing
    "dojox/charting/themes/Claro",
 
    // Charting plugins:
 
    //  We want to plot a Pie chart
    "dojox/charting/plot2d/Pie",
 
    // Retrieve the Legend, Tooltip, and MoveSlice classes
    "dojox/charting/action2d/Tooltip",
    "dojox/charting/action2d/MoveSlice",
 
    //  We want to use Markers
    "dojox/charting/plot2d/Markers",
 
    //  We'll use default x/y axes
    "dojox/charting/axis2d/Default",
 
    // Wait until the DOM is ready
    "dojo/domReady!"
], function(Chart, theme, Pie, Tooltip, MoveSlice) {
 
    // Define the data
    var chartData = [45,25,20,10];
    
     var Data = [
         {text: "Chrome : 45% ", y:45, color: "rgb(47,126,216)", tooltip: "45 %" },
         {text: "Safari : 25% ", y:25, color: "rgb(13,35,58)", tooltip: "25 %"},
         {text: "Opera : 20% ", y:20, color:"rgb(139,188,33)", tooltip: "25 %"},
         {text: "IE : 10% ", y: 10, color:"rgb(145,0,0)", tooltip: "25 %"}
       ];
 
    // Create the chart within it's "holding" node
    var chart = new Chart(element[0]);
 
    // Set the theme
    chart.setTheme(theme);
 
    // Add the only/default plot
    chart.addPlot("default", {
        type: Pie,
        markers: true,
        radius:170
    });
 

    // Add the series of data
    chart.addSeries("Browser Share",Data);
 
    // Create the tooltip
    var tip = new Tooltip(chart,"default");
 
    // Create the slice mover
    var mag = new MoveSlice(chart,"default");
 
    // Render the chart!
    chart.render();
 
});
	  
      scope.$watch("data", function (newValue) {
        //chart.series[0].setData(newValue, true);
      }, true);
      
    }
  }
});
  
}());
