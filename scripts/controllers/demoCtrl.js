(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl', ['$scope', function($scope){
      $scope.title = "Browser Share";
       $scope.Data = [
         {name: "Chrome", score:45, color: "rgb(47,126,216)" },
         {name: "Safari", score:25, color: "rgb(13,35,58)"},
		 {name: "Opera", score:20, color:"rgb(139,188,33)"},
         {name: "IE", score: 10, color:"rgb(145,0,0)"}
       ];
	  
	  
			
      $scope.d3OnClick = function(item){
		for(var i = 0; i < $scope.ChartData.length ; i++){
			if($scope.ChartData[i].name == item.name){
				$scope.ChartData[i].selected = true;
				$scope.ChartData[i].sliced = true;
				console.log($scope.ChartData[i].name);
			}else{
				$scope.ChartData[i].selected = false;
				$scope.ChartData[i].sliced = false;
			}
		}
		$scope.$apply();
	  }
	  
	   $scope.convertDataForHighChart = function(){
		var chartData = [];
		for(var i = 0; i < $scope.Data.length ; i++){
		   if($scope.Data[i].name == "Chrome"){
			var chromeData = {
                    name: $scope.Data[i].name,
                    y: $scope.Data[i].score,
                    sliced: true,
                    selected: true
                };
				chartData.push(chromeData);
		   }
		   else{
			var others = {
                    name: $scope.Data[i].name,
                    y: $scope.Data[i].score,
					sliced: false,
                    selected: false
                };
				
			chartData.push(others);
		   }
		}
         return chartData;
	  }
	  
	  $scope.ChartData = $scope.convertDataForHighChart($scope.Data);
	  
	  $scope.btnRefreshClick = function(){
       $scope.Data = [
        {name: "Chrome", score:55, color: "rgb(47,126,216)" },
        {name: "Safari", score:10, color: "rgb(13,35,58)"},
		{name: "Opera", score:25, color:"rgb(139,188,33)"},
        {name: "IE", score: 10, color:"rgb(145,0,0)"}
      ];
	  $scope.ChartData = $scope.convertDataForHighChart($scope.Data);
      };
    }]);
}());
