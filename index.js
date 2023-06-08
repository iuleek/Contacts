// Creating Input
const check = document.createElement("INPUT");
check.setAttribute("type", "checkbox");
check.classList.add("contacts__checkbox")

// Making the switch functional
document.getElementById("btn-light").addEventListener("click", function () {
  document.getElementById("btn-dark").style.backgroundColor = "#FAF4F0";
  document.getElementById("btn-light").style.backgroundColor = "#AE7AFF";
});

document.getElementById("btn-dark").addEventListener("click", function () {
  document.getElementById("btn-light").style.backgroundColor = "#FAF4F0";
  document.getElementById("btn-dark").style.backgroundColor = "#AE7AFF";
});

//document.addEventListener('DOMContentLoaded', function () {
// Creating ajax call

/*******With XHR********/
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true); // Initializes a request
// xhr.onreadystatechange = function () {
// readystate : 0-unsent 1-opened 2-headers_received 3-loading 4-done
// UNSENT: 0 OPENED: 0 LOADING: 200 DONE: 200
// if (xhr.readyState === 4 && xhr.status === 200) {
//   var response = JSON.parse(xhr.responseText);
// CODE THAT MANIPULATES DATA 
//   };
//   xhr.send();
// });

/*******With FETCH********/
// Triggers when the initial HTML document has been completely loaded and parsed.
document.addEventListener('DOMContentLoaded', function () {
  // Initiate GET request using fetch -> returns a promise
  fetch("https://jsonplaceholder.typicode.com/users")
    // Checks if the response was successful (status code 200) using response.ok
    .then(function (response) {
      if (response.ok) {
        // Extract JSON data
        return response.json();
      } else {
        throw new Error("Error:" + response.status);
      }
    })
    .then(function (data) {
      // Getting the tbody by id contactsBody
      var contactsBody = document.getElementById('contactsBody');

      // Getting the td by class name 
      var nameRows = contactsBody.getElementsByClassName('name');
      var emailRows = contactsBody.getElementsByClassName('email');

      // 9 rows available
      for (var i = 0; i < 9; i++) {
        var dataRow = data[i];
        // Getting the i cell from rowsName
        var nameCell = nameRows[i];
        // Getting the i cell from rowsEmail
        var emailCell = emailRows[i];

        // Clear the text content
        nameCell.textContent = '';
        var checkboxContainer = document.createElement('span');
        // Append the checkbox
        checkboxContainer.appendChild(check.cloneNode(true));
        // Append the name text
        checkboxContainer.appendChild(document.createTextNode(dataRow.name));

        nameCell.appendChild(checkboxContainer);
        nameCell.classList.add("contacts__name");
        emailCell.textContent = dataRow.email.toLowerCase();
        emailCell.classList.add("contacts__email");
      }
    })
    // Catch block executed if there was an error during fetch request or JSON parsing
    .catch(function (error) {
      console.error(error);
    });
});

