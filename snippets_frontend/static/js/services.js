(function() {
    angular.module('snippets.services', [])
    .factory('snippetsServices', ['$http', '$q', '$filter',function($http, $q, $filter){
        var urlSnippets = 'http://127.0.0.1:8000/api/snippets/';
        function getSnippets(){
            // var snippets = $resource("/api/snippets/:pk",
            //                         {'pk': '@pk'});
            var deffered = $q.defer();
            $http.get(urlSnippets)
                .then(function(response){
                deffered.resolve(response.data)
                });

            return deffered.promise;
        }
        function byId(id) {
            id = id;
            var deffered = $q.defer();
            getSnippets().then(function(response){
                var results = response.filter(function(snippet) {
                    return snippet.id === parseInt(id);
                });
                if(results.length>0){
                    deffered.resolve(results[0]);
                }
                else {
                    deffered.reject();
                }
            });
            return deffered.promise;
        }
        function saveSnippet(snippet){
            debugger;
            $http.post(urlSnippets, JSON.stringify(snippet))
                .then(function(response){
                    alert('datos ingresados correctamente');
                })
            // $http({
            //     method: 'POST',
            //     url: '/api/snippets/',
            //     data: JSON.stringify(snippet),
            //     headers: {'Content-Type':'application/x-www-form-urlencoded', 'Accept':'aplication/json'}
            // })
            // .then(function successCallback(response) {
            //     alert('datos ingresados correctamente');
            // });
        }
        return {
            getSnippets: getSnippets,
            byId: byId,
            saveSnippet:saveSnippet
        }

    }]);
})();
