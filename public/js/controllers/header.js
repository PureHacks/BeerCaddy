'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Public List',
        'link': ''
    },{
        'title': 'Tab Master',
        'link': 'tabs'
    }];
    
    $scope.isCollapsed = false;
}]);