var emailIn = document.querySelector("div.log input[name='emailIn']");
var passIn = document.querySelector("div.log input[name='passIn']");
var btnLog = document.querySelector("div.log input[name='login']");
btnLog.addEventListener("click",login);

 var userName;


 function login(){
  
  var user = {
    email:emailIn.value,
    pass:passIn.value,
  };

  if (!user.email || !user.pass) {
    alert("all inputs requeired");
  }
  else
  {
  var users = JSON.parse(localStorage.getItem("users"));
  // if email match
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == user.email && users[i].pass == user.pass ) {
           
       var userName={
        name: users[i].name,
        email:users[i].email,
        pass: users[i].pass,
       }
       localStorage.setItem("userName", JSON.stringify(userName));
       
       window.location.href="home.html"
      
       return 0;
      }

  }
  alert("email or password incorrect");
}

}

    


