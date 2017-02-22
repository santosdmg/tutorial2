(function() {
    angular.module('snippets.services', [])
    .factory('snippetsServices', ['$http', '$q',function($http, $q){

        function getSnippets(){
            // var snippets = $resource("/api/snippets/:pk",
            //                         {'pk': '@pk'});
            var deffered = $q.defer();
            $http({
                method: 'GET',
                url: '/api/snippets/'
            })
            .then(function successCallback(response) {
                deffered.resolve(response.data.results);
            });
            return deffered.promise;
        }

        return {
            getSnippets: getSnippets
        }

    }]);
})();
