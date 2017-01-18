angular.module('myApp').controller('mainController', function($scope, mainService){
  mainService.getPokemon().then(function(response){
    console.log(response);
    $scope.pokemon = response.data.results;
  })
})
