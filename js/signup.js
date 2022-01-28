var fname = document.querySelector("div.signup input[name='name']");
var email = document.querySelector("div.signup input[name='email']");
var pass = document.querySelector("div.signup input[name='pass']");
var btnUp = document.querySelector("div.signup input[name='signup']");
btnUp.addEventListener("click", signup);


function signup() {
    var user = {
      name: fname.value,
      email: email.value,
      pass: pass.value,
    };
    // validate empty input
    if (!user.name || !user.email || !user.pass) {
      alert("all inputs requeired");
    } else {
      // if storage empty
      if (localStorage.getItem("users") === null) {
        var users = [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        var users = JSON.parse(localStorage.getItem("users"));
        // if email reapted
        for (var i = 0; i < users.length; i++) {
          if (users[i].email == user.email) {
            alert("email exist!!");
  
            return 0;
          }
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
  
        fname.value = "";
        email.value = "";
        pass.value = "";
      }
    }
  }
  