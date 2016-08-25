myApp.controller("employeeController", ["$scope", "$http", function($scope, $http) {
  console.log("employee controller is working!");

    $scope.people = [];
    $scope.salaryArray = [];
    $scope.annualSalary = 0;

    $scope.addEmployee = function() {

      $scope.people.push($scope.employee);

      $scope.salaryArray.push($scope.employee.salary);

      calculateEmployeeSalary();

      $scope.employee = "";
    }

    $scope.deleteEmployee = function(person) {
      var index = $scope.people.indexOf(person);
      var salary = $scope.salaryArray.indexOf(person.salary);

      $scope.people.splice(index, 1);
      $scope.salaryArray.splice(index, 1);

      calculateEmployeeSalary();
    }

    function calculateEmployeeSalary() {
      $scope.monthlySalary = 0;
      $scope.salaryArray.forEach(function (element, index, array) {
        $scope.monthlySalary += element / 12;
      });

      return $scope.monthlySalary;
    }

}]);
