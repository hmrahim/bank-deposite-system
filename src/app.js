document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const email = document.getElementById("email");
    const password = document.getElementById("password")
    
    
    if (email.value == "user" && password.value == "secret") {
         window.location.href= "banking.html"
        
    }else {
        alert("invalid email or password")
    }
    
})


