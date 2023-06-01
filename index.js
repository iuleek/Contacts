document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onreadystatechange = function() {
        //readystate : 0-unsent 1-opened 2-headers_received 3-loading 4-done
        //UNSENT: 0 OPENED: 0 LOADING: 200 DONE: 200
        if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var contactsBody = document.getElementById('contactsBody'); //Getting the tbody by id
        var rows = contactsBody.getElementsByTagName('tr');
        for (var i = 0; i < 9; i++) { //I only created 9 rows
          var rowData = response[i];
          var row = rows[i];
  
          var cells = row.getElementsByTagName('td');
          cells[0].textContent = rowData.name;
          cells[0].classList.add("contacts__name");
          cells[1].textContent = rowData.email.toLowerCase();
          cells[1].classList.add("contacts__email");
        }
      }
    };
    xhr.send();
  });
  