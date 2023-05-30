const app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.year = new Date().getFullYear();
});