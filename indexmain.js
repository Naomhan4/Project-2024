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