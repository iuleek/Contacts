// Creating Input
const check = document.createElement("INPUT");
check.setAttribute("type", "checkbox");
check.classList.add("contacts__checkbox")

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

/*********************EVENT LISTENER CHECKBOXES ***************************/
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("main-checkbox").addEventListener("click", function() {
  
    const checkboxes = document.getElementsByTagName("input");
    for(var i = 1; i < checkboxes.length; i++) {
      checkboxes[i].checked = this.checked;
    }
});
});
// Making the switch functional

/***********************EVENT LISTENER DARK THEME***************************/
document.getElementById("btn-dark").addEventListener("click", function () {
  document.getElementById("btn-light").style.backgroundColor = "#FAF4F0";
  document.getElementById("btn-dark").style.backgroundColor = "#AE7AFF";

  /*Changing background*/
  document.body.classList.add("dark-theme");
  
  /*Changing icons in topBar*/
  var search = document.getElementsByClassName("search");
  search[0].classList.add("search__dark");
  
  var notifications = document.getElementsByClassName("notifications");
  notifications[0].classList.add("notifications__dark");
  
  var apps = document.getElementsByClassName("apps");
  apps[0].classList.add("apps__dark");

  /*Changing text color of btns and appearance*/
  const buttons = document.querySelectorAll("button");
  for(var i = 0; i<buttons.length; i++){
    buttons[i].classList.add("btn__dark");
  }
  var btnViews = document.getElementsByClassName("views__btn");
  for(var i = 0; i<btnViews.length; i++){
    btnViews[i].classList.add("views__btn__dark");
  }
  var btnOptions = document.getElementsByClassName("opt__btn");
  for(var i = 0; i<btnOptions.length; i++) {
    btnOptions[i].classList.add("opt__btn__dark");
  }
  btnOptions[0].classList.add("sort__dark");
  btnOptions[1].classList.add("bulk__dark");

  document.getElementsByClassName("create__btn")[0].classList.remove("btn__dark");

  var btnsPagin = document.getElementsByClassName("pagin__btn");
    btnsPagin[0].classList.add("btn__prev__dark");
    btnsPagin[1].classList.add("btn__next__dark");
  document.getElementsByClassName("links__btn")[0].classList.add("links__btn__dark");
  /*Changing links color of bottom*/
  var links = document.getElementsByClassName("link");
  for(var i = 0; i<links.length; i++)
  links[i].classList.add("link__dark");

  /*Changing table appereance*/
  document.getElementById("contactsTable").classList.add("table__dark");
  const tableRows = document.getElementsByTagName("tr");
  for(var i = 0; i<tableRows.length; i++) {
  tableRows[i].classList.add("tr__dark");
  }

  var theaderElements = document.getElementsByClassName("theader-icon");
  for(var i = 0; i<theaderElements.length; i++) {
    theaderElements[i].classList.add("theader-icon__dark");
    }
});

/*****************EVENT LISTENER LIGHT THEME*********************/
document.getElementById("btn-light").addEventListener("click", function () {
  document.getElementById("btn-dark").style.backgroundColor = "#FAF4F0";
  document.getElementById("btn-light").style.backgroundColor = "#AE7AFF";

   /*Changing background*/
   document.body.classList.remove("dark-theme");
  
   /*Changing icons in topBar*/
   var search = document.getElementsByClassName("search");
   search[0].classList.remove("search__dark");
   
   var notifications = document.getElementsByClassName("notifications");
   notifications[0].classList.remove("notifications__dark");
   
   var apps = document.getElementsByClassName("apps");
   apps[0].classList.remove("apps__dark");
 
   /*Changing text color of btns and appearance*/
   const buttons = document.querySelectorAll("button");
   for(var i = 0; i<buttons.length; i++){
     buttons[i].classList.remove("btn__dark");
   }
   var btnViews = document.getElementsByClassName("views__btn");
   for(var i = 0; i<btnViews.length; i++){
     btnViews[i].classList.remove("views__btn__dark");
   }
   var btnOptions = document.getElementsByClassName("opt__btn");
   for(var i = 0; i<btnOptions.length; i++) {
     btnOptions[i].classList.remove("opt__btn__dark");
   }
   btnOptions[0].classList.remove("sort__dark");
   btnOptions[1].classList.remove("bulk__dark");
 
   document.getElementsByClassName("create__btn")[0].classList.remove("btn__dark");
 
   var btnsPagin = document.getElementsByClassName("pagin__btn");
     btnsPagin[0].classList.remove("btn__prev__dark");
     btnsPagin[1].classList.remove("btn__next__dark");
   document.getElementsByClassName("links__btn")[0].classList.remove("links__btn__dark");
   /*Changing links color of bottom*/
   var links = document.getElementsByClassName("link");
   for(var i = 0; i<links.length; i++)
   links[i].classList.remove("link__dark");
 
   /*Changing table appereance*/
   document.getElementById("contactsTable").classList.remove("table__dark");
   const tableRows = document.getElementsByTagName("tr");
   for(var i = 0; i<tableRows.length; i++) {
   tableRows[i].classList.remove("tr__dark");
   }
   var theaderElements = document.getElementsByClassName("theader-icon");
  for(var i = 0; i<theaderElements.length; i++) {
    theaderElements[i].classList.remove("theader-icon__dark");
    }
 
});