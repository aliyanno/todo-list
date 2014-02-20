// Create the angular module
var toDoApp = angular.module("toDoApp", []);

// Define the controller in the angular module
toDoApp.controller("toDoController", ["$scope", function($scope) {
	$scope.date = new Date();
	$scope.tasks = [
		{"name": "Feed the dogs", "done": false}, 
		{"name": "Take the garbage out", "done": false},
	];
	$scope.getTotalTasks = function() {
		return $scope.tasks.length;
	}
	$scope.clearCompleted = function() {
		$scope.tasks = _.filter($scope.tasks, function(task) {
			return !(task.done);
		});
	}
	$scope.addTask = function(arg) {
		$scope.tasks.push({"name": arg, "done": false});
		$scope.newTaskName = "";
	}	
}]);
