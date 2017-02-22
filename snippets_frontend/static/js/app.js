(function() {
    var app = angular.module('snippets', [
        'ngRoute',
        'snippets.controllers',
        'snippets.services'


    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'snippetsController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);

})();
