'use strict';

angular.module('mean.tabs').controller('TabsController', ['$scope', '$routeParams', '$location', 'Global', 'Tabs', function ($scope, $routeParams, $location, Global, Tabs) {
    $scope.global = Global;

    $scope.tabPlusOne = function(tab) {
       // var tab = $scope.tab;
        tab.tab++;

        if (!tab.updated) {
            tab.updated = [];
        }
        tab.updated.push(new Date().getTime());

        tab.$update(function() {
        	console.log(tab.email + ' updated');
        });
    };

    $scope.tabMinusOne = function(tab) {
        //var tab = $scope.tab;
        tab.tab--;

        if (!tab.updated) {
            tab.updated = [];
        }
        tab.updated.push(new Date().getTime());

        tab.$update(function() {
        	console.log(tab.email + ' updated');
        });
    };



    $scope.find = function() {
        Tabs.query(function(tabs) {
            $scope.tabs = tabs;
        });
    };
}]);