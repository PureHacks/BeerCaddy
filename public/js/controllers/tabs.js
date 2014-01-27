'use strict';

angular.module('mean.tabs').controller('TabsController', ['$scope', '$routeParams', '$location', 'Global', 'Tabs', function ($scope, $routeParams, $location, Global, Tabs) {
    $scope.global = Global;

    $scope.tabs = [];
    $scope.searchFilter = '';
    $scope.selectedFilterName = 'all';

    $scope.activeFilter = function(tab){
        switch($scope.selectedFilterName){
            //todo: implement floor
            case 'eighthFloor' :
                return tab.floor === 8;
            case 'ninthFloor' :
                return tab.floor === 9;
            case 'owesBeer' :
                return tab.tab < 0;
            case 'getBeer' :
                return tab.tab > 0;
            default :
                return true;
        }
    };

    $scope.tabPlusOne = function(tab) {
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
