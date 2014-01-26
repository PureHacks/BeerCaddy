'use strict';

angular.module('mean.tabs').controller('TabsController', ['$scope', '$routeParams', '$location', 'Global', 'Tabs', function ($scope, $routeParams, $location, Global, Tabs) {
    $scope.global = Global;

    $scope.tabs = [];
    $scope.searchFilter = '';
    $scope.activeFilter = function(tab){
        switch($scope.selectedFilterName){
            //todo: implement floor
            case "eighthFloor" : return tab.floor == 8;
            case "ninthFloor" : return tab.floor == 9;
            case "getBeer" : return tab.tab > 0;
            default : return true;
        }
    };

    $scope.selectedFilterName = "all";

    // $scope.showGetsBeers = function(tab){
    //      $scope.activeFilters = $scope.getsBeersFilter;
    // };

    // $scope.getsBeersFilter = function(tab){
    //     return tab.tab > 0;
    // };  

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