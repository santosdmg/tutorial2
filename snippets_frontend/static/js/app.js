(function() {
    var app = angular.module('snippets', [
        'ngResource',
        'snippets.controllers',
        'snippets.services'

    ]);

    app.config(['$resourceProvider', function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

})();
