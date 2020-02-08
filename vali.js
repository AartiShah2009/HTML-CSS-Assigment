function validateForm() {
 		 var x = document.forms.myForm.pass.value;
		var y = document.forms.myForm.em.value;
		var reEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		 if (x == "" && y == "") {
  		  alert("Email and Password  cannot be empty");
  		  return false;
  		}
		if(!y.match(reEx)){
			alert("enter correct email");
			return false;
			}
		if (y == "" || y == null) {
  		  alert("email cannot be empty");
  		  return false;
  		}
		  if (x == "") {
  		  alert("Password cannot be empty");
  		  return false;
  		}
		if (x.match(/[a-z]/g) && x.match( 
                    /[A-Z]/g) && x.match( 
                    /[0-9]/g) && x.match( 
                    /[^a-zA-Z\d]/g) && x.length >= 8) 
                return true;
            else 
                {
			alert("enter strong password");
			return false;
		}		 
		document.write("submited");
		
	}   		 