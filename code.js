//admin saved
var name = "John";
var username = "admin";
var pass = "admin";

function loginAdmin(){
	
	var un = document.getElementById("unAdmin").value;
	var pw = document.getElementById("pwAdmin").value;
	
	if(un == username && pw == pass)
	{
		alert("Logging in as " +  name );
		window.location.href="admin.html";
	}
	else{
		alert("Sorry invalid username/password");
	}

	
}
