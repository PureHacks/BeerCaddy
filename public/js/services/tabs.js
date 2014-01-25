'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.tabs').factory('Tabs', ['$resource', function($resource) {
    return $resource('tabs/:tabId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);