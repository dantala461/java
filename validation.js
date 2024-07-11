
	const signUpButton = document.getElementById("signUp");
	const signInButton = document.getElementById("signIn");
    const form = document.getElementById("form");

    signUpButton.addEventListener("click", () => {
		form.classList.add("right-panel-active");
    });

	signInButton.addEventListener("click", () => {
		form.classList.remove("right-panel-active");
	});
	
	function validateform(){  
		var name = document.myform.name.value; 
		var password = document.myform.password.value; 
		
  
		if (name==null || name==""){
			alert("Name can't be blank");
			return false;
		}else if(password.length < 6){
			alert("Password must be at least 6 characters long.");
			return false;
		}	
			
		var x = document.myform.email.value;
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
		
        if (atposition < 1 || dotposition < (atposition + 2)
                || (dotposition + 2) >= x.length) {
            alert("Please enter a valid e-mail address.");
            return false;
        }
				
	}

	