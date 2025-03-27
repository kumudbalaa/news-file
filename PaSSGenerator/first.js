
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase  = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;

}) 

genBtn.addEventListener('click',()=>{
    passBox.value = generatepassword();
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJkLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

//  function to generate pass
function generatepassword(){
    let genpassword ="";
    let allchars = "";

    allchars += lowercase.checked  ? lowerchars : "";
    allchars += uppercase.checked  ? upperchars : "";
    allchars += numbers.checked  ? allnumbers : "";
    allchars += symbols.checked  ? allsymbols : "";

    // if(allchars == "" || allchars.length == 0){
    //     return genpassword;
    // }

    // let i = 1;
    // while(i<=inputSlider.value){
    //     genpassword= allchars.charAt(Math.floor(Math.random() * allchars.length));
          
    // }
    // return genpassword; 

    if (allchars === "") {
        return genpassword;
    }

    for (let i = 0; i < inputSlider.value; i++) {
        genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    }

    return genpassword;
   
}

copyIcon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(passBox.value)
})