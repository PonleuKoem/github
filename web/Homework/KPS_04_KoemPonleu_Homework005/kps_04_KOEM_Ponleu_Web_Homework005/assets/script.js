
		var i = 1;
		var j = 1;
		var render_row = 0;

		var row_selected = new Array();
		
		// ++++++++++++++++++++++++++ function insert record ++++++++++++++++++++++++++
		function myInsert(){
			var z = n_validate();
			var y = sch_validate();
			var w = ph_validate();
			var x = document.getElementById("mytable").childElementCount;
			var name = document.getElementById("name");
			var sch = document.getElementById("school");
			var contact = document.getElementById("contact");
			var gender = document.getElementById("gender");
			
			var tr = document.createElement("tr");
			if (name.value=="" || sch.value=="" || contact.value =="" || gender.value ==0) {
					document.getElementById("error").innerHTML ="All field are not allow to be empty";

			}
			else if (z ==false || y ==false || w==false) {
				document.getElementById("error").innerHTML ="Error occurs might caused by validation!"
			}
			else{
				tr.setAttribute("id","id"+j++);
				tr.setAttribute("class","tr");
				tr.setAttribute("onclick", "selected_row(this)");
				var td1 = document.createElement("td");
				td1.setAttribute("class", "class_col_id");
				var td2 = document.createElement("td");
				var td3 = document.createElement("td");
				var td4 = document.createElement("td");
				var td5 = document.createElement("td");

				var td1t =  document.createTextNode(i++);
				var td2t =  document.createTextNode(name.value);				
				var td3t = document.createTextNode(gender.value);
				var td4t =  document.createTextNode(sch.value);
				var td5t = document.createTextNode(contact.value);

				td1.appendChild(td1t);
				td2.appendChild(td2t);
				td3.appendChild(td3t);
				td4.appendChild(td4t);
				td5.appendChild(td5t);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);

				document.getElementById('mytable').appendChild(tr);
				document.getElementById("records").innerHTML = x+1+"";
				document.getElementById("error").innerHTML =""
			}
			
			return x;
		}
		
		// ++++++++++++++++++++++++++ function insert record ++++++++++++++++++++++++++
		function selected_row(current_e)
		{
			var getRowID = current_e.id;

			if(current_e.style.backgroundColor != "rgb(240, 173, 78)"){			
				current_e.style.backgroundColor = "rgb(240, 173, 78)";
				current_e.setAttribute("class", "clicked");
				row_selected.push(getRowID);
				var jj = document.getElementsByClassName("clicked").length;
				document.getElementById("row_select_to").innerHTML = +jj +" selected";
			}
			else{
				current_e.setAttribute("class", "");
				current_e.style.backgroundColor = "#fff";
				var jj = document.getElementsByClassName("clicked").length;
				document.getElementById("row_select_to").innerHTML = +jj +" selected";

				for(var i = 0; i < row_selected.length; i++){
					if(getRowID == row_selected[i]){
						row_selected.splice(i, 1);
					}
				}
			}
		}

		// ++++++++++++++++++++++++++ function insert record ++++++++++++++++++++++++++
		function removeRow()
		{
			if(row_selected.length != 0){
				var jj = document.getElementsByClassName("clicked").length;
				if(confirm("Delete "+jj+" record(s)?") == true){
					var myTable = document.getElementById("mytable");
					
					var all_tr = document.getElementsByTagName("tr");
					
					for(var j = 0; j < all_tr.length; j++){
						for(var i = 0; i < row_selected.length ; i++){
							if(all_tr[j].id == row_selected[i]){
								myTable.removeChild(document.getElementById(all_tr[j].id));
								j=0; 
								break;
							}
						}
					}
					row_selected = new Array();
					var x = document.getElementById("mytable").childElementCount;
					document.getElementById("records").innerHTML = x;
					document.getElementById("row_select_to").innerHTML = "";
				}
			}
			else{
				alert("Select row to delete!");
			}
		}

		// ++++++++++++++++++++++++++ name all ++++++++++++++++++++++++++
		function n_validate(){
			var name = document.getElementById("name").value;
			var patt_name = /[^A-z]/ig;
			var test_name = name.match(patt_name);

			if(test_name != null || name.length <1){
				document.getElementById("name_validate").innerHTML = "* Your name is invalid!!!";
				return false;
			}
			document.getElementById("name_validate").innerHTML = "";
		}

		// ++++++++++++++++++++++++++ validate school name ++++++++++++++++++++++++++
		function sch_validate(){
			var school = document.getElementById("school").value;
			var patt_school = /[^A-z | \s]/ig;
			var test_school = school.match(patt_school);

			if(test_school != null || school.length <1){
				document.getElementById("invalid-school").innerHTML = "* Your school is invalid!!!";
				return false;
			}
			document.getElementById("invalid-school").innerHTML = "";
		}
		// ++++++++++++++++++++++++++ validate phone number ++++++++++++++++++++++++++
		function ph_validate(){
			var phone = document.getElementById("contact").value;
			var patt_phone = /[^0-9 | \s | -]/ig;
			var test_phone = phone.match(patt_phone);

			if(test_phone != null || phone.length <9){
				document.getElementById("invalid-phone").innerHTML = "* invalid input! only number at least 9 characters!!!";
				return false;
			}
				
			document.getElementById("invalid-phone").innerHTML = "";
		}

		// ++++++++++++++++++++++++++ delete all ++++++++++++++++++++++++++
		function deleteAll(){
			var x = document.getElementById("mytable").childElementCount;
			if (x!=0) {
				if(confirm("Sure to delete all of "+x +" record(s)") == true)
				{
					document.getElementById("records").innerHTML = "0";

					var myNode = document.getElementById("mytable");
					while (myNode.firstChild) {
					    myNode.removeChild(myNode.firstChild);
					}
				}
			}else{
				alert("No records!");
			}
		}
