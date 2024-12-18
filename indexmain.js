document.getElementById("correct").style.display="none";
document.getElementById("incorrect").style.display="none";
function agechecker()
{
    var age=document.getElementById("age").value;
    if (age=1234)
        {
            document.getElementById("correct").style.display="block";
            document.getElementById("correct").style.background="green";
            document.getElementById("incorrect").style.display="none";
        }
    else     
        {
            document.getElementById("correct").style.display="none";
            document.getElementById("incorrect").style.display="block";
            document.getElementById("incorrect").style.background="red";
        }
}
//Made by NG
function validatePassword() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const correctPassword = "1234";
    if (password === correctPassword) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        document.querySelector("div[align='right']").style.display = "none";
        const usernameDisplay = document.createElement("div");
        usernameDisplay.id = "usernameDisplay";
        usernameDisplay.innerText = `Welcome, ${username}`;
        document.body.appendChild(usernameDisplay);
        usernameDisplay.style.display = "block";
    } else {
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";
    }
}