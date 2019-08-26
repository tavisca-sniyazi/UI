function mySearchFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("empTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }

 

/*function autocomplete(inp, arr) {
  
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

 

var countries = new Array();
autocomplete(document.getElementById("myInput"), countries);
*/
/*************************************************************************************/
var countries = new Array();
    var arrHead = new Array();
    arrHead = ['Things To Do', 'Update', 'Remove'];
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable'); 

 

        var tr = empTable.insertRow(-1);

 

        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th');    
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }

 

        var div = document.getElementById('cont');
        div.appendChild(empTable);   
    }

 

    function addNewRow(newTask) {
        var empTab = document.getElementById('empTable');
        var rowCnt = empTab.rows.length;       
        var tr = empTab.insertRow(rowCnt);     
        tr = empTab.insertRow(rowCnt);

 

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');       
            td = tr.insertCell(c);

 

            
            if (c == arrHead.length-2) {        
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Update');
                button.setAttribute('onclick', 'updateTask()');
                td.appendChild(button);
            }
            else if (c == arrHead.length-1) {       
                var button = document.createElement('img');
                button.setAttribute('src', 'remove.jpg');
                button.setAttribute('onclick', 'removeRow(this)');
                button.setAttribute('height', '20px');
                button.setAttribute('width', '20px');
                td.appendChild(button);
            }
            else {
                var ele = document.createElement('div');
                ele.setAttribute('value', newTask);
                ele.setAttribute('class', 'todo_list');
                td.contentEditable = "true";
                ele.innerHTML = newTask;
                countries.push(newTask);
                td.appendChild(ele);
            }   
        }
                //document.getElementById("myInput").value = "";
    }
    function addRow(){
        var new_task = document.getElementById("myInput").value;
        addNewRow(new_task);
        new_task.innerHTML=" ";
    }

 

    function updateTask(){

 

    }

 

    function removeRow(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
        var removeElement = oButton.parentNode.parentNode.cells[1].innerHTML;
            for( var i = 0; i < countries.length; i++){ 
               if ( countries[i] === removeElement) {
                 countries.splice(i, 1); 
               }
}
    }

 

   /* function call_TODO() {
      var x1 = document.getElementById("TODO_div");
      if (x1.style.display === "none") {
        x1.style.display = "block";
      } else {
        x1.style.display = "none";
      }
    }
    function call_User() {
      var x2 = document.getElementById("User_div");
      if (x2.style.display === "none") {
        x2.style.display = "block";
      } else {
        x2.style.display = "none";
      }
    }
    function call_Profile() {
      var x3 = document.getElementById("Profile_div");
      if (x3.style.display === "none") {
        x3.style.display = "block";
      } else {
        x3.style.display = "none";
      }
    }*/