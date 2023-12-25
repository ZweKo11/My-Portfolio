const checkBtn = document.getElementById("checkBtn");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const body = document.getElementsByTagName("body")[0];

checkBtn.addEventListener('change',()=>{
    if(checkBtn.checked){
        lightMode.style.display = "none";
        darkMode.style.display = "inline";
        body.style.backgroundColor = "#0C0404";
        body.style.color = "white";
        body.style.transition = "0.4s";
    }else{
        lightMode.style.display = "inline";
        darkMode.style.display = "none";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        darkMode.style.color = "black";
        body.style.transition = "0.4s";
    }
});
