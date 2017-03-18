(function() {
    var app = angular.module('snippets', [
        'ngRoute',
        'snippets.controllers',
        'snippets.services',
        'snippets.directives'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/snippets.html',
            controller: 'snippetsController'
        })
        .when('/new/snippet/', {
            templateUrl: 'views/new-snippet.html'
        })
        .when('/snippet/:id', {
            templateUrl: 'views/det-snippet.html',
            controller: 'detSnippetController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);

})();
