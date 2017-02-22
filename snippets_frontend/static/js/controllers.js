(function() {
    angular.module('snippets.controllers', [])
    .controller('snippetsController', ['$scope', 'snippetsServices', function($scope, snippetsServices) {
        console.log('Bienvenido al index!');
        snippetsServices.getSnippets().then(function(response) {
            $scope.snippets = response;
        });
    }]);
})();
