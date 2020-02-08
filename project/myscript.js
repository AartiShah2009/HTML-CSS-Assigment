function validateForm() {
 		 var d = document.forms.myForm.date.value;
		 var p = document.forms.myForm.price.value;
		var n = document.forms.myForm.name.value;
		var alphaExp = /^[a-zA-Z]+$/;
		var numericExpression = /^[0-9]+$/;
		 if (n == "" || n == null) {
  		  alert("Name cannot be empty");
  		  return false;
  		}
		
		if(n.match(numericExpression)){
			alert("name cannot be number");
			return false;
			}
		
		if(!p.match(numericExpression)){
			alert("Price should be number");
			return false;
			}
		
		  if (d == "") {
  		  alert("Date cannot be empty");
  		  return false;
  		}
		
		if(n.match(alphaExp)){
		return true;
		}else{ 
			alert("name should be standard alphabets.");
			return false;
			}
		if(y.length<2 || y.length>65)
		{
		alert("name length should be 2 to 65");
		return false;
		
		}
		
	}   		 	
