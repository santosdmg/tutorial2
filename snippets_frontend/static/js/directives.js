(function(){
    angular.module('snippets.directives', [])
    .directive('snippetD', function() {
        return{
            restrict: 'E',
            templateUrl: 'partials/snippet.html'
        }
    })
    .directive('newSnippet', ['snippetsServices', function(snippetsServices) {
        return {
            restrict: 'E',
            templateUrl: 'partials/form-new-snippet.html',
            controller: function($scope){
                $scope.nSnippet = {};
                $scope.addNewSnippet = function(){
                    snippetsServices.saveSnippet($scope.nSnippet);
                    
                    $scope.nSnippet={};
                };
            }
        };


    }])
})();
