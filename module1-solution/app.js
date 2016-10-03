(function() {
'use strict'
angular.module('lunchApp', [])
.controller('LuncherChecker',  LuncherChecker);

function LuncherChecker ($scope) {


	$scope.checkItems = function() {

		var items = getItems($scope.menu);

		var numOfItems = items.length;
		
		if(numOfItems == 0) {
			$scope.message = "Please enter data first";
			$scope.messageColor = "red";
		} else if( numOfItems >= 1 && numOfItems <= 3) {
			$scope.message ="Enjoy!";
			$scope.messageColor = "green";
		} else {
			$scope.message= "Too much";
			$scope.messageColor = "green";
		}

	}

	$scope.getMessageColor = function() {
		return $scope.messageColor;
	}
}

function getItems(menu) {
	var comma = ','

	menu = menu || "";

	var items =  menu.split(comma);

	return removeEmpty(items);
}

function removeEmpty(items) {
	var newItems = [];

	for(var index in items) {
		var item = items[index];
		if(item !== null && item !== ''&& item.trim() !=='' ) {
			newItems.push(item);	
		}
	}
	return newItems;
}



})();