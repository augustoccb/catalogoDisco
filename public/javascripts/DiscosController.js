  
    /*  $scope.discos=[{artista:"pedro",album:"pedras",genero:"axe",ano:"1990"},
                     {artista:"marcos",album:"marcando",genero:"pank",ano:"2014"}];
        */

      
 function DiscosController($scope, $http) {

   function Disco() {
    this.artista = '';
    this.album = '';
    this.genero = '';
    this.ano = '';
   }

   $scope.disco = new Disco();

   $scope.discos = [];

   $http.get('/discos').success(function(retorno) {
   $scope.discos = retorno.discos;
   });
   
   $scope.editaDisco = function(index){
   $scope.disco = $scope.discos[index];
   $scope.edit = true;
   };

   $scope.adicionaDisco = function() {
   $http.post('/disco', $scope.disco).success(function() {
   $scope.discos.push($scope.disco);
   $scope.disco = new Disco();
  });
 }

}
