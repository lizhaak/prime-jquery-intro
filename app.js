$(document).ready(function () {
    var array = [];
    var salaryArray = [];
    var annualSalary = 0;

    $('#employeeinfo').on('submit', function (event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array, transfer each index into a new property on an object with the value of what was entered
      fields.forEach(function (element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      salaryArray.push(values.employeesalary);

      // console.log('salaryArray: ', salaryArray);
      // console.log('values: ', values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      // employeeID = values.employeeid;

      // append to DOM
      appendDom(values);
      var totalSalary = calculateEmployeeSalary(salaryArray);
      appendSalary(totalSalary);

    });

    $('#container').on('click', '.remove', function (event) {
      $(this).parent().remove();
      salaryArray.push(-($(this).data('salary')));
      appendSalary(calculateEmployeeSalary(salaryArray));
    });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>Name: ' + empInfo.employeefirstname + ' ' + empInfo.employeelastname +
      '</p><p>ID: ' + empInfo.employeeid + '</p><p>Job Title: ' + empInfo.employeejobtitle +
      '</p><p>Salary(Yearly): ' + empInfo.employeesalary + '</p>' +
      '<button class="remove" data-salary=' + empInfo.employeesalary + ' >Remove</button>');
    }

    function calculateEmployeeSalary(salaryArray) {
      var monthlySalary = 0;
      salaryArray.forEach(function (element, index, array) {
        console.log('element: ', element);
        annualSalary += parseInt(element);
        monthlySalary += parseInt(element) / 12;
      });

      return monthlySalary;
    }

    function appendSalary(salary) {
      $('#monthlySalary').empty();
      $('#monthlySalary').append('<p>' + salary + '</p>');
    }
  });
