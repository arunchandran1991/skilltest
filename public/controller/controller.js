app.controller('testController', function($scope, $http) {

//  var baseUrl = "http://localhost:8083"; 
 $scope.skillList = [];
 $scope.showAdd = false;
 $scope.searchSkills = {"query" : ""};
 $scope.addSkills = {
  "id": "",
  "name": "",
  "status": ""
 }

 var localData = localStorage.getItem('data');
 $scope.skillList.push(JSON.parse(localData))

 $scope.addSkill = function() {
    
    $http
     .post('/api/skills', { "name": $scope.addSkills.name, "status": $scope.addSkills.status })
     .then(function(res) {
      $scope.addSkills.id = $scope.skillList.length + 1;
      $scope.skillList.push($scope.addSkills)
      localStorage.setItem('data', JSON.stringify($scope.addSkills))
      $scope.addSkills = {}
       alert('Skill added successfully!');
     });
  
  }

 $scope.changeSkill = function(obj) {
      $http
      .put('/api/skills/'+ obj.id +'/update', { "name": obj.name })
      .then(function(res) {
        var a = $scope.skillList.indexOf(obj);      
        $scope.skillList[a] = {
        "id": obj.id,
        "name": obj.name,
        "status": obj.status
        }
      },function(err){
        console.log('err',err);
      });
    $scope.openEdit = false;
    localStorage.setItem('data', JSON.stringify(obj));
  
}

 $scope.changeStatus = function(id, status){
    var statusCode = status == 'rejected' ? 0 : 1;
    $http
      .put('/api/skills/'+ id +'/approve', {"status": statusCode})
      .then(function(res) {
        alert('This skill is ' + (statusCode === 1 ? 'Approved' : 'Rejected'));
      });   
 }

 $scope.getAllSkills = function(){
   var query = $scope.searchSkills.query;
    $http.get('/api/skills',{params:{"q":query}}).then(function(res) {
        $scope.skillList = res.data; 
    });
    
 }


})

/***************************************************************************************

            Please refer below angular code for calling apis

***************************************************************************************/

/*

   $http.get('/api/skills').then(function(res) {
    
        Must return below array of json
        *******************************************************
          Sample JSON
        *******************************************************  
        [{
          "id": "",
          "name": "",
          "status": null   //for approval (0 or 1)
        }]

    
    $scope.skillList = res.data; 
 });



  //Add 
  $scope.add = function() {
   $http
    .post('/api/skills', { name: $scope.data.name, status: $scope.data.status })
    .then(function(res) {
      alert('Skill added successfully!');
    });
  }

  Edit

  $scope.edit = function(index) {
    $scope.data = $scope.skillList[index];
    $http
      .put('/api/skills/'+ id +'/update', { name: $scope.data.name })
      .then(function(res) {
        alert('Skill updated Successfully');
      });
    $scope.openEdit = false;
  }


  //Change Statuys

  $scope.status = function(index, status){
    //Approve 
    $http
      .put('/api/skills/'+ id +'/approve', { status: status })
      .then(function(res) {
        alert('This skill is ' + (status === 1 ? 'Approved' : 'Rejected'));
      });   
  }

*/