//Signup Data Storage In Local Storage
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#SignUp form");
    form.addEventListener("submit",(e)=>{
        
        const name = document.getElementById("Form-Name").value;
        const email = document.getElementById("Form-Email").value;
        const password = document.getElementById("Form-Password").value;

        var userData = JSON.parse(localStorage.getItem("signup")) ?? [];
        let emailExists = userData.some((user)=>user.email === email);
        if(emailExists){
           return alert("Email already exists. Please use a different email.");
        }else if(name === "" || email === "" || password === ""){
              return alert("All fields are required.");
        }
         else {
            if(password.length === 8){
                userData.push({name, email, password});
                localStorage.setItem("signup", JSON.stringify(userData));
                window.location.href = "submit.html";
            }else{
                return alert("Password must be 8 characters long.");
            }
        }        
        form.reset();
        e.preventDefault();
    })
}); 

//Login Data Verification From Local Storage
document.addEventListener("DOMContentLoaded", () => {
    let Loginform = document.querySelector("#LogIn form");
    Loginform.addEventListener("submit",(e)=>{
        const email = document.getElementById("Login-email").value;
        const password = document.getElementById("Login-password").value;
        console.log(email,password);
        var storedData = JSON.parse(localStorage.getItem("signup")) || [];
        let validUser = storedData.find((user)=> user.email === email && user.password === password);
        if(email === "" || password === ""){
            return alert("All fields are required.");
        }else if(!validUser){
            return alert("Invalid email or password.");
        }else if(validUser){
            window.location.href = "submit.html";
        }
        e.preventDefault();
    });
});
    
