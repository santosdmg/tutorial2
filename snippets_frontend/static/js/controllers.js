(function() {
    angular.module('snippets.controllers', [])
    .controller('snippetsController', ['$scope', 'snippetsServices', function($scope, snippetsServices) {
        snippetsServices.getSnippets().then(function(response) {
            $scope.snippets = response;
        });
    }])
    .controller('detSnippetController', ['$scope', 'snippetsServices', '$routeParams', function($scope, snippetsServices, $routeParams) {
        var id = $routeParams.id;
        snippetsServices.byId(id)
        .then(function(data) {
            $scope.snippet = data;
        })
    }]);
})();
