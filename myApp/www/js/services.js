angular.module('app.services', ['ngResource'])

.factory('BlankFactory', [function($resource){

}])

.service('userService', function($http){
var users=[];
return{
  getUsers:function(){
    return $http.get("http://10.252.234.117:8088/cmru-web/app/api/getUsers")
    .then(function(response){
      alert(JSON.stringify(response));
      users=response;
      return users;
    });
  }
}
});
