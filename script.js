
document.getElementById("login").onclick = function () {
    event.preventDefault()
    
    let name = document.getElementById("fullName").value;
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
    
    
    if (mail === "admin@user.com" && password === "987654") {
        window.location.href = "home.html"
        document.getElementById("adminlogin").innerText=name
    }
    
    else {
        Toastify({
            text: ("Invalid Email and Password"),
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #93291e, #ed213a)",
            }
        }).showToast();
    }
    document.getElementById("adminlogin").innerHTML=name

    
}
